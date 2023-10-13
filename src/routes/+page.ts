import type { PageLoad } from './$types';

export const load = async ({ fetch, params }) => {
    // let response = (await fetch('http://localhost:3001/api?key=JjKZFxKWn8UWr3Pd7VLWGvhfmi4Q6li89qP0G6d6rq5O4J1p')).json();
    return {
        foo: 'bar'
    };
};