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
} from '@wordpress/block-editor';

    

const inspectorControls = props => { (
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
                    onChange={ ( nextValue ) =>
                        setAttributes( {postType:  nextValue } )
                    }
                />
            </PanelRow>
        </PanelBody>
        <PanelBody title={ __( 'Display Options' )}>
            <PanelRow>
                <ToggleControl
                    label={ __( 'Display Author' ) }
                    checked={ author }
                    onChange={ ( nextValue ) =>
                        setAttributes( { author:nextValue } )
                    }
                />
            </PanelRow>
            <PanelRow>
                <ToggleControl
                    label={ __( 'Display Date' ) }
                    checked={ date }
                    onChange={ ( nextValue ) =>
                        setAttributes( { date:nextValue } )
                    }
                />
            </PanelRow>
            <PanelRow>
                <ToggleControl
                    label={ __( 'Display Categories' ) }
                    checked={ displayCategories }
                    onChange={ ( nextValue ) =>
                        setAttributes( { displayCategories:nextValue } )
                    }
                />
            </PanelRow>
            <PanelRow>
                <ToggleControl
                    label={ __( 'Display Tags' ) }
                    checked={ displayTags }
                    onChange={ ( nextValue ) =>
                        setAttributes( { displayTags:nextValue } )
                    }
                />
            </PanelRow>
            <PanelRow>
                <ToggleControl
                    label={ __( 'Display Featured Image' ) }
                    checked={ postImage }
                    onChange={ ( nextValue ) =>
                        setAttributes( { postImage:nextValue } )
                    }
                />
            </PanelRow>
        </PanelBody>
    </InspectorControls>
)};
export default inspectorControls;