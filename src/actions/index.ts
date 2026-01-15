import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { getPostLikes } from './posts/get-posts-likes.actions';
import { updateLikes } from './posts/updates-likes.actions';

export const server = {
    getPostLikes,
    updateLikes
}