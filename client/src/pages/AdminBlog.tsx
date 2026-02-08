import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "sonner";
import { Plus, Trash2, Image as ImageIcon, Save, ArrowLeft, FileText } from "lucide-react";
import DashboardLayout from "@/components/DashboardLayout";

export default function AdminBlog() {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedPost, setSelectedPost] = useState<any>(null);
  
  const utils = trpc.useUtils();
  const { data: posts, isLoading } = trpc.blog.listAll.useQuery();
  
  const createMutation = trpc.blog.create.useMutation({
    onSuccess: () => {
      toast.success("記事を公開しました");
      utils.blog.listAll.invalidate();
      setIsEditing(false);
    }
  });

  const updateMutation = trpc.blog.update.useMutation({
    onSuccess: () => {
      toast.success("記事を更新しました");
      utils.blog.listAll.invalidate();
      setIsEditing(false);
    }
  });

  const deleteMutation = trpc.blog.delete.useMutation({
    onSuccess: () => {
      toast.success("記事を削除しました");
      utils.blog.listAll.invalidate();
    }
  });

  const handleEdit = (post: any) => {
    setSelectedPost(post);
    setIsEditing(true);
  };

  const handleCreate = () => {
    setSelectedPost({
      title: "",
      content: "",
      category: "residential_medium",
      location: "",
      price: 0,
      imageUrl: "",
      images: []
    });
    setIsEditing(true);
  };

  if (isLoading) return <DashboardLayout><div>読み込み中...</div></DashboardLayout>;

  return (
    <DashboardLayout>
      <div className="max-w-5xl mx-auto space-y-6">
        {!isEditing ? (
          <>
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-black flex items-center gap-2">
                <FileText className="h-8 w-8 text-primary" />
                作業実績管理
              </h1>
              <Button onClick={handleCreate} className="font-bold">
                <Plus className="w-4 h-4 mr-2" /> 新規記事作成
              </Button>
            </div>

            <div className="grid gap-4">
              {posts?.map((post: any) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow border-none shadow-sm">
                  <div className="flex items-center p-4 gap-4">
                    <div className="w-20 h-20 bg-muted rounded-lg overflow-hidden flex items-center justify-center shrink-0">
                      {post.imageUrl ? (
                        <img src={post.imageUrl} className="w-full h-full object-cover" alt="" />
                      ) : (
                        <ImageIcon className="w-8 h-8 text-muted-foreground/30" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg truncate">{post.title}</h3>
                      <p className="text-sm text-muted-foreground">{new Date(post.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" onClick={() => handleEdit(post)}>編集</Button>
                      <Button variant="outline" size="sm" className="text-destructive hover:text-destructive" onClick={() => {
                        if(confirm("本当に削除しますか？")) deleteMutation.mutate({ id: post.id });
                      }}>削除</Button>
                    </div>
                  </div>
                </Card>
              ))}
              {posts?.length === 0 && (
                <div className="text-center py-20 bg-muted/20 rounded-2xl">
                  <p className="text-muted-foreground">まだ記事がありません。「新規記事作成」から投稿してください。</p>
                </div>
              )}
            </div>
          </>
        ) : (
          <BlogEditor 
            post={selectedPost} 
            onSave={(data) => {
              if (selectedPost.id) {
                updateMutation.mutate({ id: selectedPost.id, ...data });
              } else {
                createMutation.mutate(data);
              }
            }}
            onCancel={() => setIsEditing(false)}
          />
        )}
      </div>
    </DashboardLayout>
  );
}

function BlogEditor({ post, onSave, onCancel }: { post: any, onSave: (data: any) => void, onCancel: () => void }) {
  const [formData, setFormData] = useState(post);
  const [newImageUrl, setNewImageUrl] = useState("");

  const addImage = () => {
    if (!newImageUrl) return;
    const currentImages = formData.images || [];
    setFormData({ ...formData, images: [...currentImages, newImageUrl] });
    setNewImageUrl("");
  };

  const removeImage = (index: number) => {
    const newImages = [...(formData.images || [])];
    newImages.splice(index, 1);
    setFormData({ ...formData, images: newImages });
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" onClick={onCancel}><ArrowLeft className="w-4 h-4 mr-2" /> 戻る</Button>
        <h2 className="text-2xl font-bold">{post.id ? "記事を編集" : "新規記事作成"}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <Card className="border-none shadow-sm">
            <CardHeader><CardTitle>基本情報</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold">タイトル</label>
                <Input 
                  value={formData.title} 
                  onChange={e => setFormData({...formData, title: e.target.value})}
                  placeholder="例：那覇市にてエアコン完全分解洗浄を行いました"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">本文</label>
                <p className="text-[10px] text-muted-foreground bg-primary/5 p-2 rounded">
                  💡 <strong>画像の入れ方:</strong> 本文の中に <code>[画像1]</code> <code>[画像2]</code> と書くと、右側で追加した画像がその場所に表示されます。
                </p>
                <Textarea 
                  value={formData.content} 
                  onChange={e => setFormData({...formData, content: e.target.value})}
                  className="min-h-[400px] font-mono text-sm"
                  placeholder="作業の内容を詳しく記入してください..."
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="border-none shadow-sm">
            <CardHeader><CardTitle>詳細設定</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold">施工場所</label>
                <Input value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} placeholder="例：那覇市" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold">料金（円）</label>
                <Input type="number" value={formData.price} onChange={e => setFormData({...formData, price: Number(e.target.value)})} />
              </div>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm">
            <CardHeader><CardTitle>画像管理</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-bold">メイン画像URL（一覧用）</label>
                <Input value={formData.imageUrl} onChange={e => setFormData({...formData, imageUrl: e.target.value})} placeholder="https://..." />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-bold">本文用画像を追加</label>
                <div className="flex gap-2">
                  <Input value={newImageUrl} onChange={e => setNewImageUrl(e.target.value)} placeholder="画像URLを入力" />
                  <Button type="button" size="icon" onClick={addImage}><Plus className="w-4 h-4" /></Button>
                </div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  {formData.images?.map((url: string, i: number) => (
                    <div key={i} className="relative group">
                      <img src={url} className="w-full h-20 object-cover rounded border" alt="" />
                      <div className="absolute top-1 left-1 bg-black/70 text-white text-[10px] px-1.5 rounded font-bold">画像{i+1}</div>
                      <button 
                        onClick={() => removeImage(i)}
                        className="absolute top-1 right-1 bg-destructive text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Button className="w-full h-14 font-bold text-lg shadow-lg" onClick={() => onSave(formData)}>
            <Save className="w-5 h-5 mr-2" /> 記事を保存する
          </Button>
        </div>
      </div>
    </div>
  );
}
