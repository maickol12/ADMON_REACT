import React from 'react';
import { Route } from 'react-router';
import { AlbumsScreen } from '../components/jsonplaceholder/AlbumsScreen';
import { CommentsScreen } from '../components/jsonplaceholder/CommentsScreen';
import { PhotosScreen } from '../components/jsonplaceholder/PhotosScreen';
import { PostsScreen } from '../components/jsonplaceholder/PostsScreen'
import { TodosScreen } from '../components/jsonplaceholder/TodosScreen';
import { UsersScreen } from '../components/jsonplaceholder/UsersScreen';
import MenuScreen  from './../components/admin/MenuScreen';

export const JsonPlaceHolderRouter = () => {
    return (
        <div>
            <MenuScreen />
            <div className='container mt-8'>
                <Route path='/jsonplaceholder/posts'    component={ PostsScreen } />
                <Route path='/jsonplaceholder/comments' component={ CommentsScreen } />
                <Route path='/jsonplaceholder/albums'   component={ AlbumsScreen } />
                <Route path='/jsonplaceholder/photos'   component={ PhotosScreen } />
                <Route path='/jsonplaceholder/todos'    component={ TodosScreen } />
                <Route path='/jsonplaceholder/users'    component={ UsersScreen } />
            </div>
        </div>
    )
}
