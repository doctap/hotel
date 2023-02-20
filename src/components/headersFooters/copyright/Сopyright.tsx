import React from 'react';
import Paragraph from '../../texts/paragraph/Paragraph';

interface ICopyright {
	text: string;
}

export default function Copyright(props: ICopyright) {
	return (
		<Paragraph>
			{props.text}
		</Paragraph>
	)
}
