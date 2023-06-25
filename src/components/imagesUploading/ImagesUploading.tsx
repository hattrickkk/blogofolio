import React from "react";
import ImageUploading, { ImageListType } from "react-images-uploading";
import './imagesUploading.scss'
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { updateCreatePostValidationStore } from "../../store/postCreateValidation/actions";

export function ImagesUploading() {

	const [images, setImages] = React.useState([]);
	const maxNumber = 1;

	const dispatch = useDispatch<AppDispatch>()
	const onChange = (
		imageList: ImageListType,
	) => {
		setImages(imageList as never[])
		if (imageList[0] && imageList[0].file?.name) {
			dispatch(updateCreatePostValidationStore('image', JSON.stringify(imageList[0].file)))
			// console.log(JSON.stringify(imageList[0]))
		}
	}

	return (
		<div className="images-uploading">
			<p className="images-uploading__title">Image</p>
			<ImageUploading
				value={images}
				onChange={onChange}
				maxNumber={maxNumber}
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
	);
}
