import Header from './Header.js'
import TabsCollection from './Tabs.js'
import Like from './Like.js'
import VideoPlayerCollection from './VideoPlayer.js'
import ExpandableContentCollection from './ExpandableContent.js'
import defineScrollBarWidthCSSVar from './utils/defineScrollBarWidthCSSVar.js'
import pxToRem from './utils/pxToRem.js'
import InputMaskCollection from './InputMask.js'
import SelectCollection from './Select.js'

new Header()
new TabsCollection()
new Like()
new VideoPlayerCollection()
new ExpandableContentCollection()
new InputMaskCollection()
new SelectCollection()

defineScrollBarWidthCSSVar()

