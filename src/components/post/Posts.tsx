import { useEffect, useState } from 'react'
import { getPosts } from '../../services/getPosts'
import { IPost } from '../../models'
import PostContent from './PostContent'
import './posts.scss'

const posts2: IPost[] = [{
	"id": 1,
	"image": "https://images.unsplash.com/photo-1618530130946-08e764345b83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFzdHJvbmF1dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	"text": "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
	"date": "April 20, 2021",
	"lesson_num": 0,
	"title": "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
	"author": "Katrin",
	description: 'sdsd'
}, {
	"id": 2,
	"image": "https://images.unsplash.com/photo-1618530130946-08e764345b83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFzdHJvbmF1dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	"text": "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
	"date": "April 20, 2021",
	"lesson_num": 0,
	"title": "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
	"author": "Katrin",
	description: 'sdsd'
}, {
	"id": 3,
	"image": "https://images.unsplash.com/photo-1618530130946-08e764345b83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFzdHJvbmF1dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	"text": "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
	"date": "April 20, 2021",
	"lesson_num": 0,
	"title": "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
	"author": "Katrin",
	description: 'sdsd'
},
{
	"id": 4,
	"image": "https://images.unsplash.com/photo-1618530130946-08e764345b83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFzdHJvbmF1dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	"text": "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
	"date": "April 20, 2021",
	"lesson_num": 0,
	"title": "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
	"author": "Katrin",
	description: 'sdsd'
},
{
	"id": 5,
	"image": "https://images.unsplash.com/photo-1618530130946-08e764345b83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFzdHJvbmF1dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	"text": "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
	"date": "April 20, 2021",
	"lesson_num": 0,
	"title": "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
	"author": "Katrin",
	description: 'sdsd'
},
{
	"id": 6,
	"image": "https://images.unsplash.com/photo-1618530130946-08e764345b83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFzdHJvbmF1dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	"text": "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
	"date": "April 20, 2021",
	"lesson_num": 0,
	"title": "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
	"author": "Katrin",
	description: 'sdsd'
},
{
	"id": 7,
	"image": "https://images.unsplash.com/photo-1618530130946-08e764345b83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFzdHJvbmF1dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	"text": "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
	"date": "April 20, 2021",
	"lesson_num": 0,
	"title": "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
	"author": "Katrin",
	description: 'sdsd'
},
{
	"id": 8,
	"image": "https://images.unsplash.com/photo-1618530130946-08e764345b83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFzdHJvbmF1dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	"text": "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
	"date": "April 20, 2021",
	"lesson_num": 0,
	"title": "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
	"author": "Katrin",
	description: 'sdsd'
},
{
	"id": 9,
	"image": "https://images.unsplash.com/photo-1618530130946-08e764345b83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFzdHJvbmF1dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	"text": "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
	"date": "April 20, 2021",
	"lesson_num": 0,
	"title": "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
	"author": "Katrin",
	description: 'sdsd'
},
{
	"id": 10,
	"image": "https://images.unsplash.com/photo-1618530130946-08e764345b83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFzdHJvbmF1dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	"text": "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
	"date": "April 20, 2021",
	"lesson_num": 0,
	"title": "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
	"author": "Katrin",
	description: 'sdsd'
},
{
	"id": 11,
	"image": "https://images.unsplash.com/photo-1618530130946-08e764345b83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGFzdHJvbmF1dHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
	"text": "Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.",
	"date": "April 20, 2021",
	"lesson_num": 0,
	"title": "Astronauts prep for new solar arrays on nearly seven-hour spacewalk",
	"author": "Katrin",
	description: 'sdsd'
},]

type Sizetype = 'small' | 'big' | 'medium'

const Posts = () => {
	const [posts, setPosts] = useState<IPost[]>([])
	const [limit, setLimit] = useState(11)
	const [offset, setOffset] = useState(0)

	useEffect(() => {
		getPosts()
			.then(res => setPosts(res))
	}, [limit, offset])

	const arrOfSizes: Sizetype[] = ['big', 'small', 'small', 'medium', 'medium', 'small', 'small', 'medium', 'medium', 'small', 'small']

	return (
		<div className='postContainer container'>
			{posts2.map((elem, i) => (
				<PostContent
					size={arrOfSizes[i]}
					post={elem}
					key={elem.id}
				/>
			))}
		</div>
	)
}

export default Posts