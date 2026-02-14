import { useState } from "react";
import { useAuth } from "@/_core/hooks/useAuth";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Loader2, Plus, Edit, Trash2, Eye, EyeOff, LogOut, LayoutDashboard, AlertCircle } from "lucide-react";
import { toast } from "sonner";
import { Link } from "wouter";
import { getLoginUrl } from "@/const";

export default function Admin() {
  // 自動リダイレクトを完全に無効化
  const { user, loading: authLoading, logout, isAuthenticated } = useAuth({
    redirectOnUnauthenticated: false,
  });

  const utils = trpc.useUtils();
  
  // ユーザーが管理者であることを確認してからクエリを有効にする
  const isAdmin = !!user && user.role === 'admin';
  
  const { data: blogPosts, isLoading: postsLoading, error: postsError } = trpc.blog.listAll.useQuery(undefined, {
    enabled: isAdmin,
    retry: false,
  });
  
  const createMutation = trpc.blog.create.useMutation({
    onSuccess: () => {
      utils.blog.listAll.invalidate();
      utils.blog.list.invalidate();
      toast.success("記事を作成しました");
      setIsCreateOpen(false);
      resetForm();
    },
    onError: (err) => toast.error(`作成失敗: ${err.message}`),
  });

  const updateMutation = trpc.blog.update.useMutation({
    onSuccess: () => {
      utils.blog.listAll.invalidate();
      utils.blog.list.invalidate();
      toast.success("記事を更新しました");
      setIsEditOpen(false);
      resetForm();
    },
    onError: (err) => toast.error(`更新失敗: ${err.message}`),
  });

  const deleteMutation = trpc.blog.delete.useMutation({
    onSuccess: () => {
      utils.blog.listAll.invalidate();
      utils.blog.list.invalidate();
      toast.success("記事を削除しました");
    },
    onError: (err) => toast.error(`削除失敗: ${err.message}`),
  });

  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "residential_small" as any,
    area: "",
    price: "",
    location: "",
    imageUrl: "",
    isPublished: 1,
  });

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      category: "residential_small",
      area: "",
      price: "",
      location: "",
      imageUrl: "",
      isPublished: 1,
    });
    setEditingId(null);
  };

  const handleEdit = (post: any) => {
    setEditingId(post.id);
    setFormData({
      title: post.title,
      content: post.content,
      category: post.category,
      area: post.area?.toString() || "",
      price: post.price?.toString() || "",
      location: post.location || "",
      imageUrl: post.imageUrl || "",
      isPublished: post.isPublished,
    });
    setIsEditOpen(true);
  };

  const handleSubmit = (e: React.FormEvent, isUpdate = false) => {
    e.preventDefault();
    const data = {
      ...formData,
      price: formData.price ? parseInt(formData.price) : undefined,
    };

    if (isUpdate && editingId) {
      updateMutation.mutate({ id: editingId, ...data });
    } else {
      createMutation.mutate(data);
    }
  };

  // 認証チェック中
  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  // 未認証または管理者でない場合
  if (!isAuthenticated || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-muted/30 p-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <AlertCircle className="h-6 w-6 text-primary" />
            </div>
            <CardTitle className="text-xl">管理者認証が必要です</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-muted-foreground">
              管理画面にアクセスするには、管理者アカウントでのログインが必要です。
            </p>
            <div className="flex flex-col gap-3">
              {/* 正しいログインURLを取得して遷移する */}
              <Button onClick={() => window.location.href = getLoginUrl()} className="w-full">
                ログイン画面へ
              </Button>
              <Link href="/">
                <Button variant="ghost" className="w-full">ホームに戻る</Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 pb-20">
      <header className="bg-white border-b sticky top-[80px] z-10">
        <div className="container py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="h-6 w-6 text-primary" />
            <h1 className="text-xl font-black">管理画面</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden sm:inline">
              ようこそ、{user?.name || '管理者'}さん
            </span>
            <Button variant="outline" size="sm" onClick={() => logout()}>
              <LogOut className="h-4 w-4 mr-2" />
              ログアウト
            </Button>
          </div>
        </div>
      </header>

      <main className="container py-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">作業実績一覧</h2>
          <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
            <DialogTrigger asChild>
              <Button onClick={resetForm}>
                <Plus className="h-4 w-4 mr-2" />
                新規記事作成
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle>新規記事作成</DialogTitle>
              </DialogHeader>
              <form onSubmit={(e) => handleSubmit(e)} className="space-y-4 py-4">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">タイトル</Label>
                    <Input 
                      id="title" 
                      value={formData.title} 
                      onChange={e => setFormData({...formData, title: e.target.value})} 
                      required 
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="category">カテゴリ</Label>
                      <Select 
                        value={formData.category} 
                        onValueChange={v => setFormData({...formData, category: v as any})}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="residential_small">家庭用小規模</SelectItem>
                          <SelectItem value="residential_medium">家庭用中規模</SelectItem>
                          <SelectItem value="residential_large">家庭用大規模</SelectItem>
                          <SelectItem value="commercial_small">業務用小規模</SelectItem>
                          <SelectItem value="commercial_medium">業務用中規模</SelectItem>
                          <SelectItem value="commercial_large">業務用大規模</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">施工場所</Label>
                      <Input 
                        id="location" 
                        value={formData.location} 
                        onChange={e => setFormData({...formData, location: e.target.value})} 
                        placeholder="例: 那覇市"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="area">作業面積 (㎡)</Label>
                      <Input 
                        id="area" 
                        value={formData.area} 
                        onChange={e => setFormData({...formData, area: e.target.value})} 
                        placeholder="例: 25"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="price">施工価格 (円)</Label>
                      <Input 
                        id="price" 
                        type="number"
                        value={formData.price} 
                        onChange={e => setFormData({...formData, price: e.target.value})} 
                        placeholder="例: 15000"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="imageUrl">画像URL</Label>
                    <Input 
                      id="imageUrl" 
                      value={formData.imageUrl} 
                      onChange={e => setFormData({...formData, imageUrl: e.target.value})} 
                      placeholder="https://..."
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="content">作業内容</Label>
                    <Textarea 
                      id="content" 
                      value={formData.content} 
                      onChange={e => setFormData({...formData, content: e.target.value})} 
                      rows={8}
                      required 
                    />
                  </div>
                  <div className="flex items-center gap-2">
                    <input 
                      type="checkbox" 
                      id="isPublished" 
                      checked={formData.isPublished === 1}
                      onChange={e => setFormData({...formData, isPublished: e.target.checked ? 1 : 0})}
                    />
                    <Label htmlFor="isPublished">公開する</Label>
                  </div>
                </div>
                <Button type="submit" className="w-full" disabled={createMutation.isPending}>
                  {createMutation.isPending ? "作成中..." : "記事を公開する"}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>

        {postsLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        ) : postsError ? (
          <div className="text-center py-20 bg-white rounded-xl border-2 border-destructive/20">
            <p className="text-destructive font-bold mb-2">データの取得に失敗しました</p>
            <p className="text-sm text-muted-foreground">{postsError.message}</p>
          </div>
        ) : (
          <div className="grid gap-4">
            {blogPosts?.map((post) => (
              <Card key={post.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  {post.imageUrl && (
                    <div className="md:w-48 h-32 md:h-auto bg-muted">
                      <img src={post.imageUrl} alt="" className="w-full h-full object-cover" />
                    </div>
                  )}
                  <div className="flex-grow p-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          {post.isPublished ? (
                            <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                              <Eye className="h-3 w-3" /> 公開中
                            </span>
                          ) : (
                            <span className="bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded flex items-center gap-1">
                              <EyeOff className="h-3 w-3" /> 非公開
                            </span>
                          )}
                          <span className="text-xs text-muted-foreground">
                            {new Date(post.createdAt).toLocaleDateString('ja-JP')}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold">{post.title}</h3>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="icon" onClick={() => handleEdit(post)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button 
                          variant="outline" 
                          size="icon" 
                          className="text-destructive hover:bg-destructive/10"
                          onClick={() => {
                            if (confirm("本当に削除しますか？")) {
                              deleteMutation.mutate({ id: post.id });
                            }
                          }}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {post.content}
                    </p>
                    <div className="flex flex-wrap gap-4 text-xs">
                      {post.location && <span>📍 {post.location}</span>}
                      {post.price && <span className="font-bold text-primary">💰 ¥{post.price.toLocaleString()}</span>}
                    </div>
                  </div>
                </div>
              </Card>
            ))}

            {blogPosts?.length === 0 && (
              <div className="text-center py-20 bg-white rounded-xl border-2 border-dashed">
                <p className="text-muted-foreground">記事がまだありません。新しい記事を作成しましょう！</p>
              </div>
            )}
          </div>
        )}
      </main>

      {/* 編集ダイアログ */}
      <Dialog open={isEditOpen} onOpenChange={setIsEditOpen}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>記事を編集</DialogTitle>
          </DialogHeader>
          <form onSubmit={(e) => handleSubmit(e, true)} className="space-y-4 py-4">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label htmlFor="edit-title">タイトル</Label>
                <Input 
                  id="edit-title" 
                  value={formData.title} 
                  onChange={e => setFormData({...formData, title: e.target.value})} 
                  required 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-category">カテゴリ</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={v => setFormData({...formData, category: v as any})}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="residential_small">家庭用小規模</SelectItem>
                      <SelectItem value="residential_medium">家庭用中規模</SelectItem>
                      <SelectItem value="residential_large">家庭用大規模</SelectItem>
                      <SelectItem value="commercial_small">業務用小規模</SelectItem>
                      <SelectItem value="commercial_medium">業務用中規模</SelectItem>
                      <SelectItem value="commercial_large">業務用大規模</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-location">施工場所</Label>
                  <Input 
                    id="edit-location" 
                    value={formData.location} 
                    onChange={e => setFormData({...formData, location: e.target.value})} 
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="edit-area">作業面積 (㎡)</Label>
                  <Input 
                    id="edit-area" 
                    value={formData.area} 
                    onChange={e => setFormData({...formData, area: e.target.value})} 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="edit-price">施工価格 (円)</Label>
                  <Input 
                    id="edit-price" 
                    type="number"
                    value={formData.price} 
                    onChange={e => setFormData({...formData, price: e.target.value})} 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-imageUrl">画像URL</Label>
                <Input 
                  id="edit-imageUrl" 
                  value={formData.imageUrl} 
                  onChange={e => setFormData({...formData, imageUrl: e.target.value})} 
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="edit-content">作業内容</Label>
                <Textarea 
                  id="edit-content" 
                  value={formData.content} 
                  onChange={e => setFormData({...formData, content: e.target.value})} 
                  rows={8}
                  required 
                />
              </div>
              <div className="flex items-center gap-2">
                <input 
                  type="checkbox" 
                  id="edit-isPublished" 
                  checked={formData.isPublished === 1}
                  onChange={e => setFormData({...formData, isPublished: e.target.checked ? 1 : 0})}
                />
                <Label htmlFor="edit-isPublished">公開する</Label>
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={updateMutation.isPending}>
              {updateMutation.isPending ? "更新中..." : "変更を保存する"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
