"use client"; // 將這個組件聲明為 Client Component
import Cookies from "js-cookie";
import Image from "next/image"
import { useEffect, useState } from "react";

export default function ShoppingCart() {

  const [ cartData, setCartData ] = useState();

    const checkShoppingCart = () => {
      // 檢查是否已經有 Session ID
      let sessionId = Cookies.get('session_id');
      if (sessionId) {
        // 如果有，則獲取購物車內容
        fetch(`http://localhost:3030/shoppingCart/getcart/${sessionId}`)
          .then((response) => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('獲取購物車失敗');
            }
          })
          .then((data) => {
            console.log('購物車內容在購物車頁面：', data);                    
            setCartData(data);
          })
          .catch((error) => {
            console.error('錯誤：', error);
            // 處理錯誤（如顯示錯誤訊息）
          });
      }
    }

  useEffect(() => {  
    checkShoppingCart();
  }, []);
    

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-lg border border-gray-400 shadow-lg py-14 px-20 mt-16">
      <div className="mb-6">
        <h2 className="text-xl font-medium text-gray-800 border-b border-gray-200 pb-2 mb-4">Shopping Cart</h2>

        <div className="space-y-4">
          {/* First Ristretto Item */}
          <div className="flex items-center justify-between py-4 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Ristretto coffee capsule"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Ristretto</h3>
                <p className="text-amber-700">HK$ 8.50 (10 × HK$ 0.85)</p>
              </div>
            </div>
            <div className="bg-[#FF9933] text-white w-12 h-12 flex items-center justify-center rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L6 9M10 18L10 9M14 18L14 9M18 18L18 9M4 6h16M9 6v-2a1 1 0 011-1h4a1 1 0 011 1v2m-7 0h6"
                />
              </svg>
            </div>

          </div>

          {/* Second Ristretto Item */}
          <div className="flex items-center justify-between py-4 border-b border-gray-100">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 relative flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=64&width=64"
                  alt="Ristretto coffee capsule"
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Ristretto</h3>
                <p className="text-amber-700">HK$ 8.50 (10 × HK$ 0.85)</p>
              </div>
            </div>
            <div className="bg-[#FF9933] text-white w-12 h-12 flex items-center justify-center rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L6 9M10 18L10 9M14 18L14 9M18 18L18 9M4 6h16M9 6v-2a1 1 0 011-1h4a1 1 0 011 1v2m-7 0h6"
                />
              </svg>
            </div>

          </div>
        </div>
      </div>

      {/* Total and Checkout */}
      <div className="mt-16 space-y-4">

        <div className="flex justify-between items-center">
          <h3 className="font-medium text-gray-900">Total</h3>
          <p className="font-medium text-amber-700">HK$ 468.50</p>
        </div>
        <p className="text-sm text-gray-500">(Excludes Tax)</p>

        <button className="btn w-full bg-[#FF9933] hover:bg-emerald-700 text-white py-5 rounded-md mt-8">Checkout</button>

      </div>
    </div>
  );
}
