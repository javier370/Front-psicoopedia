import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {map} from 'lodash';

import routes from './routes';



export const Navigation = () => {
    //console.log("routes -->", routes);
    return (
        
        <BrowserRouter>
            <Routes>
                {map(routes, (route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={
                            <route.layout>
                                <route.component/>
                            </route.layout>
                        }
                    />
                ))}
            </Routes>
        </BrowserRouter>

    );
}
