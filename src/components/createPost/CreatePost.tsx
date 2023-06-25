import React, { ChangeEvent, useCallback, useState } from 'react'
import TextField from '../textField/TextField'
import PrimaryButton from '../../IU/button/PrimaryButton'
import SecondaryButton from '../../IU/button/SecondaryButton'
import Secondary2Button from '../../IU/button/Secondary2Button'
// import { ImagesUploading } from '../imagesUploading/ImagesUploading'
import { useNavigate } from 'react-router-dom'
import { ValidationError } from 'fastest-validator'
import FastestValidator from "fastest-validator"
import { ErrorMessageType, PostType } from '../../models'
import { useSelector } from 'react-redux'
import { AppDispatch, AppState } from '../../store'
import { useDispatch } from 'react-redux'
import { updateCreatePostValidationStore } from '../../store/postCreateValidation/actions'
import { getCreatePostValidationObj } from '../../helpers/getCreatePostValidationObj'
import ErrorLabel from '../errorLabel/ErrorLabel'
import { addPostAction } from '../../store/createPost/actions'
import '../imagesUploading/imagesUploading.scss'



import ImageUploading, { ImageListType } from "react-images-uploading";


type FormTypeErrors = Partial<Record<keyof PostType, string>>

const CreatePost = () => {
	const [images, setImages] = React.useState<ImageListType>([]);
	const onChange = (
		imageList: ImageListType,
	) => {
		setImages(imageList as never[])
		if (imageList[0] && imageList[0].file?.name) {
			dispatch(updateCreatePostValidationStore('image', JSON.stringify(imageList[0].file)))
		}
	}


	const v = new FastestValidator();
	const check = v.compile({
		title: 'string',
		lesson_num: 'string',
		description: 'string',
		text: 'string',
		image: 'string'
	})

	const [formErrors, setFormErrors] = useState<FormTypeErrors>({
		title: '',
		lesson_num: '',
		description: '',
		text: '',
		image: ''
	})
	const createPostValidationState = useSelector((state: AppState) => state.createPostValidation)

	const dispatch = useDispatch<AppDispatch>()
	const navigate = useNavigate()
	const cancelClickHandler = useCallback(() => {
		navigate('/')
	}, [])

	const inputChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		dispatch(updateCreatePostValidationStore(e.target.name, e.target.value))
	}
	const textAreaChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
		dispatch(updateCreatePostValidationStore(e.target.name, e.target.value))
	}

	const addPostClickHandler = () => {
		const { title, lesson_num, description, text, image } = createPostValidationState

		const createPostValidationObj = getCreatePostValidationObj(title, lesson_num, description, text, image as string)
		const checkResult = check(createPostValidationObj)
		if (checkResult === true) {
			if (+lesson_num < 0) {
				setFormErrors({
					...formErrors,
					lesson_num: 'Номер урока не может быть отрицателным'
				})
			}
			dispatch(addPostAction(title, lesson_num, description, text, images[0].file || 'no file', () => { navigate('/') }))

		} else {
			const errors = checkResult as ValidationError[]
			const validationErrors = errors.reduce((total, item) => {
				total[item.field] = item.message
				return total
			}, {} as any) as ErrorMessageType

			setFormErrors(validationErrors)
		}
	}

	return (
		<div className='create-post__inner'>
			<div className="create-post__fields fields">
				{/* <form action=""> */}
				<TextField
					label='Title'
					placeholder='Your title'
					name='title'
					onChangeHandler={inputChangeHandler}
				/>
				{
					formErrors.title &&
					<ErrorLabel text={formErrors.title} />
				}


				<div className='create-post__fileds-group'>
					<div className='create-post__fileds-group-col'>
						<TextField
							label='Lesson Number'
							placeholder='Lesson Number'
							name='lesson_num'
							type='number'
							onChangeHandler={inputChangeHandler}
						/>
						{
							formErrors.lesson_num &&
							<ErrorLabel text={formErrors.lesson_num} />
						}
					</div>
					<div className='create-post__fileds-group-col'>
						{/* <ImagesUploading /> */}

						<div className="images-uploading">
							<p className="images-uploading__title">Image</p>
							<ImageUploading
								value={images}
								onChange={onChange}
								maxNumber={1}
							>
								{({
									imageList,
									onImageUpload,
									onImageRemove,
									isDragging,
									dragProps
								}) => (
									<div className="upload__image-wrapper">

										<div className="upload__text">
											{imageList.map((image, index) => (
												<div key={index} className="image-item">
													<p className="image-item__filename">{image.file?.name && image.file?.name}</p>
													<div className="image-item__btn-wrapper">
														<button className="image-item__del-btn" onClick={() => {
															onImageRemove(index)
															dispatch(updateCreatePostValidationStore('image', ''))
														}}>
															<span></span>
														</button>
													</div>
												</div>
											))}
										</div>
										<button
											className="button secondary"
											style={isDragging ? { color: "red" } : undefined}
											onClick={onImageUpload}
											{...dragProps}
										>
											Upload new
										</button>

									</div>
								)
								}
							</ImageUploading >
						</div >

						{
							formErrors.image &&
							<ErrorLabel text={formErrors.image} />
						}
					</div>
				</div>

				<TextField
					label='Descryption'
					placeholder='Your descryption'
					isTextArea={true}
					name='description'
					textAreaChangedHandler={textAreaChangeHandler}
				/>
				{
					formErrors.description &&
					<ErrorLabel text={formErrors.description} />
				}

				<TextField
					label='Text'
					placeholder='Your text'
					isTextArea={true}
					className='large-input'
					name='text'
					textAreaChangedHandler={textAreaChangeHandler}
				/>
				{
					formErrors.text &&
					<ErrorLabel text={formErrors.text} />
				}


				<div className='create-post__buttons'>
					<Secondary2Button value='Clear post' />
					<div className='create-post__buttons-col'>
						<SecondaryButton value='Cancel' onClick={cancelClickHandler} />
						<PrimaryButton value='Add post' onClick={addPostClickHandler} />
					</div>
				</div>
				{/* </form> */}
			</div>

		</div>
	)
}

export default CreatePost