import ServerSideRender from '@wordpress/server-side-render';
import { __ } from '@wordpress/i18n';
import { SelectControl, 
    Toolbar,
    Button,
    Tooltip,
    PanelBody,
    PanelRow,
    FormToggle,
    ToggleControl,
    ToolbarGroup,
    Disabled, 
    RadioControl,
    RangeControl,
    TextControl, 
    FontSizePicker } from '@wordpress/components';

    import {
        RichText,
        AlignmentToolbar,
        BlockControls,
        BlockAlignmentToolbar,
        InspectorControls,
        InnerBlocks,
        withColors,
        PanelColorSettings,
        getColorClassName
    } from '@wordpress/editor'
    ;
import { withSelect, widthDispatch } from '@wordpress/data';
import { withState } from '@wordpress/compose';

const orderbyOptions = [
    { label: 'Title', value: 'title' },
    { label: 'Date', value: 'date' },
    { label: 'Menu Order', value: 'menu_order' },
    { label: 'Random', value: 'rand' },
 ];

const orderOptions = [
    { label: 'Ascending', value: 'asc' },
    { label: 'Descending', value: 'desc' },
];

const postTypeOptions = [
    {label: 'Select a post type', value: ''}
];

wp.apiFetch({path: "/wp/v2/types"}).then(posts => {
    jQuery.each( posts, function( key, val ) {
        postTypeOptions.push({label: val.name, value: val.id});
    });
}).catch( 

)

const edit = props => {
    const { attributes: {align, orderby, order, postType, postTitle, category, author, date, displayCategories, displayTags, postImage}, className, setAttributes, isSelected } = props;

    const inspectorControls = (
        <InspectorControls key="inspector">
            <PanelBody title={ __( 'Post Options' )}>
                <PanelRow>
                    <SelectControl
                        label="Order By"
                        value={orderby}
                        options= { orderbyOptions }
                        onChange={ ( nextValue ) =>
                            setAttributes( {orderby:  nextValue } )
                        }
                    />
                </PanelRow>
                <PanelRow>
                    <SelectControl 
                        label = { __('Select a Post Type') }
                        value = {postType}
                        options = {postTypeOptions}
                        //help = {__('Displays only the child categories of the selected parent category.')}
                        onChange={ ( nextValue ) =>
                            setAttributes( {postType:  nextValue } )
                        }
                    />
                </PanelRow>
            </PanelBody>
        </InspectorControls>
    );

    return [
        <div className={ props.className }>
            <ServerSideRender
                block="gcs-block-layouts/blog-mag-layout"
                attributes = {props.attributes}
            />
            { inspectorControls }
        </div>
    ];
    
};

export default edit;