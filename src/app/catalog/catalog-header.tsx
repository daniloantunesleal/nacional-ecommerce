import { ArrowLeft } from "lucide-react"

import { Header } from "@/components/header"
import { SearchInputField, SearchInputRoot } from "@/components/search-input"

export const CatalogHeader = () => (
	<>
		<Header alwaysBackgroundWhite className="max-sm:hidden" />

		<header className="mt-9 flex items-center gap-5 px-4 text-[#4A4A4A] sm:hidden">
			<ArrowLeft className="size-8" />
			<SearchInputRoot className="flex-1 rounded-full border-2 border-[#4A4A4A] px-4 py-2">
				<SearchInputField placeholder='Resultados para "blusa"' />
			</SearchInputRoot>
		</header>
	</>
)
