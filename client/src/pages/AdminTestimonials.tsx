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
import { Star, Trash2, Edit2, Plus } from "lucide-react";
import { toast } from "sonner";

export default function AdminTestimonials() {
  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    customerName: "",
    rating: 5,
    comment: "",
    serviceType: "residential" as const,
    imageUrl: "",
    source: "manual" as const,
    sourceLabel: "",
    isPublished: 1,
  });

  const { data: testimonials, refetch } = trpc.testimonials.listAll.useQuery();
  const createMutation = trpc.testimonials.create.useMutation();
  const updateMutation = trpc.testimonials.update.useMutation();
  const deleteMutation = trpc.testimonials.delete.useMutation();

  const handleSubmit = async () => {
    if (!formData.customerName || !formData.comment) {
      toast.error("顧客名とコメントは必須です");
      return;
    }

    try {
      if (editingId) {
        await updateMutation.mutateAsync({
          id: editingId,
          ...formData,
        });
        toast.success("レビューを更新しました");
      } else {
        await createMutation.mutateAsync(formData);
        toast.success("レビューを追加しました");
      }
      setIsOpen(false);
      setEditingId(null);
      setFormData({
        customerName: "",
        rating: 5,
        comment: "",
        serviceType: "residential",
        imageUrl: "",
        source: "manual",
        sourceLabel: "",
        isPublished: 1,
      });
      refetch();
    } catch (error) {
      toast.error("エラーが発生しました");
    }
  };

  const handleEdit = (testimonial: any) => {
    setFormData({
      customerName: testimonial.customerName,
      rating: testimonial.rating,
      comment: testimonial.comment,
      serviceType: testimonial.serviceType,
      imageUrl: testimonial.imageUrl || "",
      source: testimonial.source || "manual",
      sourceLabel: testimonial.sourceLabel || "",
      isPublished: testimonial.isPublished,
    });
    setEditingId(testimonial.id);
    setIsOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (confirm("このレビューを削除しますか？")) {
      try {
        await deleteMutation.mutateAsync({ id });
        toast.success("レビューを削除しました");
        refetch();
      } catch (error) {
        toast.error("削除に失敗しました");
      }
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">レビュー管理</h1>
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button
              onClick={() => {
                setEditingId(null);
                setFormData({
                  customerName: "",
                  rating: 5,
                  comment: "",
                  serviceType: "residential",
                  imageUrl: "",
                  source: "manual",
                  sourceLabel: "",
                  isPublished: 1,
                });
              }}
              className="gap-2"
            >
              <Plus className="h-4 w-4" />
              新規レビュー追加
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>
                {editingId ? "レビューを編集" : "新規レビュー追加"}
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <div>
                <Label htmlFor="customerName">顧客名</Label>
                <Input
                  id="customerName"
                  value={formData.customerName}
                  onChange={(e) =>
                    setFormData({ ...formData, customerName: e.target.value })
                  }
                  placeholder="山田太郎"
                />
              </div>

              <div>
                <Label htmlFor="rating">評価</Label>
                <Select
                  value={formData.rating.toString()}
                  onValueChange={(value) =>
                    setFormData({ ...formData, rating: parseInt(value) })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {[5, 4, 3, 2, 1].map((r) => (
                      <SelectItem key={r} value={r.toString()}>
                        <div className="flex items-center gap-2">
                          {Array(r)
                            .fill(0)
                            .map((_, i) => (
                              <Star
                                key={i}
                                className="h-4 w-4 fill-yellow-400 text-yellow-400"
                              />
                            ))}
                          {r}つ星
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="comment">コメント</Label>
                <Textarea
                  id="comment"
                  value={formData.comment}
                  onChange={(e) =>
                    setFormData({ ...formData, comment: e.target.value })
                  }
                  placeholder="レビューコメント"
                  rows={4}
                />
              </div>

              <div>
                <Label htmlFor="serviceType">サービス種別</Label>
                <Select
                  value={formData.serviceType}
                  onValueChange={(value: any) =>
                    setFormData({
                      ...formData,
                      serviceType: value,
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="residential">家庭用</SelectItem>
                    <SelectItem value="commercial">業務用</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="imageUrl">画像URL</Label>
                <Input
                  id="imageUrl"
                  value={formData.imageUrl}
                  onChange={(e) =>
                    setFormData({ ...formData, imageUrl: e.target.value })
                  }
                  placeholder="https://example.com/image.jpg"
                />
              </div>

              <div>
                <Label htmlFor="source">ソース</Label>
                <Select
                  value={formData.source}
                  onValueChange={(value: any) =>
                    setFormData({
                      ...formData,
                      source: value,
                    })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="curama">くらしのマーケット</SelectItem>
                    <SelectItem value="google">Google ビジネス</SelectItem>
                    <SelectItem value="manual">手動入力</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="sourceLabel">ソース表記</Label>
                <Input
                  id="sourceLabel"
                  value={formData.sourceLabel}
                  onChange={(e) =>
                    setFormData({ ...formData, sourceLabel: e.target.value })
                  }
                  placeholder="くらしのマーケットから引用"
                />
              </div>

              <div>
                <Label htmlFor="isPublished">公開状態</Label>
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
                    <SelectItem value="0">非公開</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button
                onClick={handleSubmit}
                className="w-full"
                disabled={
                  createMutation.isPending || updateMutation.isPending
                }
              >
                {editingId ? "更新" : "追加"}
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-4">
        {testimonials?.map((testimonial) => (
          <Card key={testimonial.id}>
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <CardTitle className="text-lg">{testimonial.customerName}</CardTitle>
                  <div className="flex items-center gap-2 mt-2">
                    {Array(testimonial.rating)
                      .fill(0)
                      .map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    <span className="text-sm text-muted-foreground">
                      {testimonial.rating}つ星
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEdit(testimonial)}
                  >
                    <Edit2 className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDelete(testimonial.id)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm">{testimonial.comment}</p>
              <div className="flex gap-4 text-xs text-muted-foreground">
                <span>
                  {testimonial.serviceType === "residential"
                    ? "家庭用"
                    : "業務用"}
                </span>
                {testimonial.sourceLabel && (
                  <span>{testimonial.sourceLabel}</span>
                )}
                {testimonial.imageUrl && (
                  <span className="text-blue-500">画像あり</span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
