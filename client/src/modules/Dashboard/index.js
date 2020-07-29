import React from 'react';
import styled from 'styled-components';
import { color } from '../../shared/theme';

const Container = styled.div`
  display: flex;
  flex-direction: column;
	align-items: center;
	padding: 20px;
`;

const Title = styled.h1`
  padding: 40px;
`;

const Subtitle = styled.h2`
	padding: 30px;
`;

const ContentContainer = styled.div`
	display: flex;
	justify-content: space-around;
`
const ContentElement = styled.div`
	flex-basis: 100%;
	text-align: center;
	padding: 30px;
	margin: 20px;
	background-color: ${color.Secondary};
	color: ${color.Text};
	border-radius: 20px;
	height: fit-content;
	font-size: large;
`

const ElementTitle = styled.h3`
	padding-bottom: 20px;
`

const Dashboard = () => (
    <Container>
        <Title> React Translate Approaches</Title>
        <Subtitle> This application explores different ways to use State Management in React </Subtitle>
				<ContentContainer>
					<ContentElement>
						<ElementTitle> Standard Approach (JS)</ElementTitle>
						<p>Uses the Context API alongside hooks to handle the various peaces of data shared between the three main components,
						DisplayTranslation, DisplayHistory and SearchForm</p>
					</ContentElement>
					<ContentElement>
						<ElementTitle> Standard Approach (TS)</ElementTitle>
						<p>Uses RxJS to share streams of data between the main components. All the subscriptions and consequent unsubscriptions area handled by
							the hook useObservable and the localStorage is managed initializing an observable on the index.js component that's alive thorugh all 
							the live of the module </p>
					</ContentElement>
					<ContentElement>
						<ElementTitle> Standard Approach (TS)</ElementTitle>
						<p> Uses Redux and Redux Thunk to handle the state of the different variables. There are two main states created, History and Languages,
							the first to manage the history, the selection of words and the consequent translation and the later to handle the input and output languages. </p>
					</ContentElement>
				</ContentContainer>
    </Container>
);

export default {
    routeProps: {
        path: '/',
        exact: true,
        component: Dashboard,
    },
    name: 'Dashboard',
};
