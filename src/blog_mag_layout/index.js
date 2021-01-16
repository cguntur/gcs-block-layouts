/**
 * Block dependencies
 */

import edit from './edit';

import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { dateI18n, format, __experimentalGetSettings } from '@wordpress/date';
import { setState } from '@wordpress/compose';
 
registerBlockType( 'gcs-block-layouts/blog-mag-layout', {
    title: 'Posts Magazine Layout',
    icon: 'admin-post',
    category: 'gcs-block-layouts',
    description: 'Display your blog posts in a magazine layout.',
    example: {
    },
    supports: {
        align: true
    },
    attributes: {
        align: {
            type: 'string',
            default: ''
        },
        orderby:{
            type: 'string',
            default: 'name',
        },
        order:{
            type: 'string',
            default: 'asc',
        },
        postType:{
            type: 'string',
            default: 'post',
        },
        postTitle:{
            type: 'number',
            default: '',
        },
        category :{
            type: 'string',
            default: 'categories',
        },
        author:{
            type: 'boolean',
            default: true,
        },
        date: {
            type: 'boolean',
            default: true,
        },
        displayCategories: {
            type: 'boolean',
            default: true,
        },
        displayTags: {
            type: 'boolean',
            default: true,
        },
        postImage: {
            type: 'boolean',
            default: true,
        },

    },
    edit: edit,
    save: () => <div> Hola, mundo! </div>,
} );
