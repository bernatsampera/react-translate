# React Translate

Compares different State Management Approaches that can be applied in React

## Approaches Detailed

### Context API, Standard

Uses the Context API alongside hooks to handle the various peaces of data shared between the three main components,
DisplayTranslation, DisplayHistory and SearchForm

### RxJS

Uses RxJS to share streams of data between the main components. All the subscriptions and consequent unsubscriptions area handled by the hook useObservable and the localStorage is managed initializing an observable on the index.js component that's alive thorugh all the live of the module
### Redux 

Uses Redux and Redux Thunk to handle the state of the different variables. There are two main states created, History and Languages, the first to manage the history, the selection of words and the consequent translation and the later to handle the input and output languages


## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.


### Install dependencies on Server and Client

Run `npm run cleaninstall` to install both dependencies

### Run the server

Run `npm run server`

### Run the client 

Run `npm run client`