"use client";
import { useState } from "react";
import { CreateDeliveryNotify } from "./CreateDeliveryNotify";
import { MediaResponseArray } from "@/types/media";

export const MediaDisplay = ({ data }: { data: MediaResponseArray }) => {
  const [mediaDatas, setMediaData] = useState(data);
  const startDelivery = () => {
    CreateDeliveryNotify("配信が開始されました");
  };
  const deleteMediaData = (deleteIndex: number) => {
    setMediaData(mediaDatas.filter((_, index) => index !== deleteIndex));
  };
  return (
    <>
      <div>
        <p className="font-bold flex justify-center mb-3">おすすめのメディアリストはこちらです。</p>
        <table className="min-w-full bg-white border border-gray-200">
          <thead className="border-b">
            <tr>
              <th className="py-2 px-4 border-b">メディア種類</th>
              <th className="py-2 px-4 border-b">メディア名</th>
              <th className="py-2 px-4 border-b">メディア概要</th>
              <th className="py-2 px-4 border-b">部署</th>
            </tr>
          </thead>
          <tbody>
            {mediaDatas.map((media, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border-b">{media.media_kind}</td>
                <td className="py-2 px-4 border-b">{media.media_name}</td>
                <td className="py-2 px-4 border-b">{media.media_overview}</td>
                <td className="py-2 px-4 border-b">{media.size_published}</td>
                <td className="py-2 px-4 border-b">
                  <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700" onClick={() => deleteMediaData(index)}>
                    削除
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center justify-center mt-6">
          <button className="px-7 py-3.5 bg-blue-500 text-white rounded-3xl text-center mb-5 no-underline hover:bg-blue-700" onClick={startDelivery}>
            配信
          </button>
        </div>
      </div>
    </>
  );
};
