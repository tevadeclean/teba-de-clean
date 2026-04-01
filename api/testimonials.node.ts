import type { VercelRequest, VercelResponse } from '@vercel/node';
import { db, getPublishedTestimonials } from '../server/db/index.js';
import { ENV } from '../server/_core/env.js';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse
) {
  try {
    console.log("API: Fetching testimonials from database...");
    
    // データベースからデータを取得
    const data = await getPublishedTestimonials();
    
    console.log(`API: Returning ${data.length} items`);
    
    // JSONとしてレスポンスを返す
    return response.status(200).json(data);
  } catch (error) {
    console.error("API Error:", error);
    
    // エラー詳細をJSONで返す（HTMLエラー画面を回避）
    return response.status(200).json([{
      id: -1,
      author_name: "システムエラー詳細",
      content: `エラー: ${(error as Error).message}. 接続先: ${ENV.databaseUrl ? "設定あり" : "未設定"}. スタック: ${(error as Error).stack}`,
      rating: 0,
      serviceType: "error",
      source: "DEBUG",
      createdAt: new Date()
    }]);
  }
}
