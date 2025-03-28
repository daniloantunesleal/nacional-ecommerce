"use client"

import { Heart, ShoppingBag } from "lucide-react"

import productPreview1 from "@/assets/product-preview-1.png"
import { useFavorites } from "@/hooks/useFavorites"
import { useShoppingCart } from "@/hooks/useShoppingCart"

export const Actions = () => {
	const { addToCart, isInShoppingCart } = useShoppingCart()
	const { toggleFavoriteItem, isItemFavorited } = useFavorites()

	const handleAddToCart = () => {
		addToCart({
			id: "123dev",
			image: productPreview1,
			color: "Vermelho",
			size: "G",
			name: "Casaco",
			price: 7999,
			quantity: 1,
			stock: 12,
		})
	}

	const handleFavorite = () => {
		toggleFavoriteItem({
			id: "123dev",
			image: productPreview1,
			name: "Casaco",
			price: 7999,
		})
	}

	return (
		<div className="mt-20 flex gap-3.5">
			<button
				data-isfavorited={isItemFavorited("123dev")}
				className="group flex size-14 cursor-pointer items-center justify-center rounded-full border-2 data-[isfavorited=true]:bg-black lg:size-[73px]"
				onClick={handleFavorite}
			>
				<Heart className="size-8 group-data-[isfavorited=true]:fill-white group-data-[isfavorited=true]:text-white" />
			</button>
			<button
				data-isincart={isInShoppingCart("123dev")}
				className="group flex size-14 cursor-pointer items-center justify-center rounded-full border-2 data-[isincart=true]:bg-black lg:size-[73px]"
				onClick={handleAddToCart}
			>
				<ShoppingBag className="size-8 group-data-[isincart=true]:fill-white" />
			</button>
			<button className="flex-1 cursor-pointer rounded-full bg-black py-3 text-xl font-semibold text-white lg:text-2xl">
				COMPRAR
			</button>
		</div>
	)
}
