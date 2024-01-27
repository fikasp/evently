'use client'

import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { ICategory } from '@/database/models/category.model'
import { getAllCategories } from '@/actions/category.actions'
import { formUrlQuery, removeKeysFromQuery } from '@/utils'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function CategoryFilter() {
	const [categories, setCategories] = useState<ICategory[]>([])
	const searchParams = useSearchParams()
	const router = useRouter()

	useEffect(() => {
		const getCategories = async () => {
			const categoryList = await getAllCategories()

			categoryList && setCategories(categoryList as ICategory[])
		}

		getCategories()
	}, [])

	const onSelectCategory = (category: string) => {
		let newUrl = ''

		if (category && category !== 'All') {
			newUrl = formUrlQuery({
				params: searchParams.toString(),
				key: 'category',
				value: category,
			})
		} else {
			newUrl = removeKeysFromQuery({
				params: searchParams.toString(),
				keysToRemove: ['category'],
			})
		}

		router.push(newUrl, { scroll: false })
	}

	return (
		<Select onValueChange={(value: string) => onSelectCategory(value)}>
			<SelectTrigger className="select-field">
				<SelectValue placeholder="Category" />
			</SelectTrigger>
			<SelectContent>
				<SelectItem value="All" className="select-item p-regular-14">
					All
				</SelectItem>

				{categories.map((category) => (
					<SelectItem
						value={category.name}
						key={category._id}
						className="select-item p-regular-14"
					>
						{category.name}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	)
}
