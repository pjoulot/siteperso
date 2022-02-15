import { chakra, ThemingProps, useStyleConfig } from '@chakra-ui/react'
import NextImage, { ImageProps as NextImageProps } from 'next/image'
import { ReactElement } from 'react'
import { Sizes } from '../theme/components/image'

/**
 * Wraps NextJs `next/image` component in Chakra's factory function
 * This is what will allow to use the theme and the styling properties on the component
 */
const ImageWithChakra = chakra(
	({
		className,
		dimensions = [0, 0],
		layout = 'fill',
		loading,
		objectFit,
		objectPosition,
		priority,
		quality,
		sizes,
		src,
		unoptimized,
		...nextjsInternals
	}) => {
		/**
		 * ? As explained earlier, NextJs typing is preventing auto-suggest for layout, width and height
		 * ? Here we actually convert our component typing to NextJs typing
		 */
		const [width, height] = dimensions

		const layoutAndSize =
			height > 0 || width > 0
				? {
						height,
						layout: layout === 'fill' ? 'intrinsic' : layout,
						width
				  }
				: {
						layout: 'fill'
				  }

		return (
			<NextImage
				className={className}
				loading={loading}
				objectFit={objectFit}
				objectPosition={objectPosition}
				priority={priority}
				quality={quality}
				sizes={sizes}
				src={src}
				unoptimized={unoptimized}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...layoutAndSize}
				// eslint-disable-next-line react/jsx-props-no-spreading
				{...nextjsInternals}
			/>
		)
	}
)

const ImageNext = ({ variant, ...props }) => {
	/**
	 * ? This components serves as an interface to pass Chakra's styles
	 * ? You can use the theme and/or styling properties (eg. backgroundColor='red.200')
	 */
	const styles = useStyleConfig('Image', { variant })
	// eslint-disable-next-line react/jsx-props-no-spreading
	return <ImageWithChakra sx={styles} {...props} />
}

export default ImageNext;