import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  // ファイルのパスを指定
  const filePath = path.join(process.cwd(), 'public', 'data', 'data.json');
  
  // ファイルを読み込む
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  
  // JSONをパース
  const data = JSON.parse(jsonData);

  // JSONデータをレスポンスとして返す
  return NextResponse.json(data);
}
