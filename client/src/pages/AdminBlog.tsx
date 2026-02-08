import { useState } from "react";
import { trpc } from "@/lib/trpc";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Trash2, Edit2, Plus, FileText } from "lucide-react";
import { toast } from "sonner";
import { format } from "date-fns";
import { ja } from "date-fns/locale";

export default function AdminBlog() {
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "residential_small" as any,
    location: "",
    area: "",
    price: 0,
    imageUrl: "",
    isPublished: 1,
  });

  const { data: blogPosts, refetch } = trpc.blog.listAll.useQuery();
  const createMutation = trpc.blog.create.useMutation();
  const updateMutation = trpc.blog.update.useMutation();
  const deleteMutation = trpc.blog.delete.useMutation();

  const categories = [
    { value: "residential_small", label: "家庭用小規模（〜20㎡）" },
    { value: "residential_medium", label: "家庭用中規模（20〜40㎡）" },
    { value: "residential_large", label: "家庭用大規模（40㎡〜）" },
    { value: "commercial_small", label: "業務用小規模" },
    { value: "commercial_medium", label: "業務用中規模" },
    { value: "commercial_large", label: "業務用大規模" }
  ];

  const handleSubmit = async () => {
    if (!formData.title || !formData.content) {
      toast.error("タイトルと内容は必須です");
      return;
    }

    try {
      if (editingId) {
        await updateMutation.mutateAsync({
          id: editingId,
          ...formData,
        });
        toast.success("記事を更新しました");
      } else {
        await createMutation.mutateAsync(formData);
        toast.success("記事を公開しました");
      }
      setIsOpen(false);
      setEditingId(null);
      resetForm();
      refetch();
    } catch (error) {
      toast.error("エラーが発生しました");
    }
  };

  const resetForm = () => {
    setFormData({
      title: "",
      content: "",
      category: "residential_small",
      location: "",
      area: "",
      price: 0,
      imageUrl: "",
      isPublished: 1,
    });
  };

  const handleEdit = (post: any) => {
    setFormData({
      title: post.title,
      content: post.content,
      category: post.category,
      location: post.location || "",
      area: post.area || "",
      price: post.price || 0,
      imageUrl: post.imageUrl || "",
      isPublished: post.isPublished,
    });
    setEditingId(post.id);
    setIsOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm("この記事を削除しますか？")) {
      try {
        await deleteMutation.mutateAsync({ id });
        toast.success("記事を削除しました");
        refetch();
      } catch (error) {
        toast.error("削除に失敗しました");
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-black flex items-center gap-2">
          <FileText className="h-8 w-8 text-primary" />
          作業実績管理
        </h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setEditingId(null);
                resetForm();
              }}
              className="gap-2 bg-primary font-bold"
            >
              <Plus className="h-4 w-4" />
              新規記事作成
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle className="text-xl font-black">
                {editingId ? "記事を編集" : "新規記事作成"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="title" className="font-bold">タイトル</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  placeholder="例：那覇市にて家庭用エアコン2台の分解洗浄を行いました"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="category" className="font-bold">カテゴリ</Label>
                  <Select
                    value={formData.category}
                    onValueChange={(value: any) =>
                      setFormData({ ...formData, category: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((c) => (
                        <SelectItem key={c.value} value={c.value}>
                          {c.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="location" className="font-bold">施工場所</Label>
                  <Input
                    id="location"
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    placeholder="例：那覇市"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="area" className="font-bold">作業面積 (㎡)</Label>
                  <Input
                    id="area"
                    value={formData.area}
                    onChange={(e) =>
                      setFormData({ ...formData, area: e.target.value })
                    }
                    placeholder="例：25"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="price" className="font-bold">施工価格 (円)</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) =>
                      setFormData({ ...formData, price: parseInt(e.target.value) || 0 })
                    }
                    placeholder="例：15000"
                  />
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="content" className="font-bold">内容</Label>
                <Textarea
                  id="content"
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  placeholder="作業の詳細を入力してください"
                  rows={8}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="imageUrl" className="font-bold">画像URL</Label>
                  <Input
                    id="imageUrl"
                    value={formData.imageUrl}
                    onChange={(e) =>
                      setFormData({ ...formData, imageUrl: e.target.value })
                    }
                    placeholder="https://example.com/image.jpg"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="isPublished" className="font-bold">公開状態</Label>
                  <Select
                    value={formData.isPublished.toString()}
                    onValueChange={(value) =>
                      setFormData({ ...formData, isPublished: parseInt(value) })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">公開</SelectItem>
                      <SelectItem value="0">下書き</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button
                onClick={handleSubmit}
                className="w-full bg-primary font-bold py-6 text-lg mt-4"
                disabled={createMutation.isPending || updateMutation.isPending}
              >
                {editingId ? "更新する" : "記事を公開する"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {blogPosts?.map((post) => (
          <Card key={post.id} className="border-none shadow-sm bg-white overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-48 bg-muted flex items-center justify-center">
                {post.imageUrl ? (
                  <img src={post.imageUrl} alt="" className="w-full h-full object-cover" />
                ) : (
                  <FileText className="h-12 w-12 text-muted-foreground/30" />
                )}
              </div>
              <div className="flex-1 p-6">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-primary/10 text-primary rounded-full">
                        {categories.find(c => c.value === post.category)?.label}
                      </span>
                      {post.isPublished === 0 && (
                        <span className="text-[10px] font-bold px-2 py-0.5 bg-yellow-100 text-yellow-700 rounded-full">
                          下書き
                        </span>
                      )}
                      <span className="text-[10px] text-muted-foreground">
                        {format(new Date(post.createdAt), "yyyy.MM.dd", { locale: ja })}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold">{post.title}</h3>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEdit(post)}
                      className="h-8 w-8 p-0"
                    >
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDelete(post.id)}
                      className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {post.content}
                </p>
                <div className="flex gap-4 text-xs font-bold text-muted-foreground">
                  {post.location && <span>📍 {post.location}</span>}
                  {post.area && <span>📐 {post.area}㎡</span>}
                  {post.price && <span className="text-primary">💰 ¥{post.price.toLocaleString()}</span>}
                </div>
              </div>
            </div>
          </Card>
        ))}
        {blogPosts?.length === 0 && (
          <div className="text-center py-20 bg-muted/20 rounded-2xl">
            <p className="text-muted-foreground">まだ記事がありません。「新規記事作成」から投稿してください。</p>
          </div>
        )}
      </div>
    </div>
  );
}
