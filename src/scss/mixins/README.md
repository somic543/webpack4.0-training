// add hover focus background on parent selector
@mixin bg-variant($parent, $color) 

//border radius
@mixin border-top-radius($radius) 
@mixin border-right-radius($radius) 
@mixin border-bottom-radius($radius) 
@mixin border-left-radius($radius) 

// Center-align a block level element
@mixin center-block()
@mixin centerer

// Clearfix
@mixin clearfix()

// gradient
@mixin gradient-horizontal($start-color: #555, $end-color: #333, $start-percent: 0%, $end-percent: 100%)
@mixin gradient-vertical($start-color: #555, $end-color: #333, $start-percent: 0%, $end-percent: 100%)
@mixin gradient-directional($start-color: #555, $end-color: #333, $deg: 45deg)
@mixin gradient-horizontal-three-colors($start-color: #00b3ee, $mid-color: #7a43b6, $color-stop: 50%, $end-color: #c3325f)
@mixin gradient-vertical-three-colors($start-color: #00b3ee, $mid-color: #7a43b6, $color-stop: 50%, $end-color: #c3325f)
@mixin gradient-radial($inner-color: #555, $outer-color: #333)
@mixin gradient-striped($color: rgba(255,255,255,.15), $angle: 45deg)

//hide text
@mixin text-hide()

//image mixin
@mixin img-responsive($display: block)

// Labels
@mixin label-variant($color)

// opacity
@mixin opacity($opacity) 

// Sizing shortcuts
@mixin size($width, $height)
@mixin square($size) 

// Typography , color change when active hover
@mixin text-emphasis-variant($parent, $color)

//triangle
@mixin triangle($direction, $color: currentColor, $size: 1em, $ratio: 1.5)

// X
@mixin xbutton($width: 20px, $color: #000, $boder-width: 1px, $hover-color: #000) 

// Responsive 'xs, sm, md, lg' 
@mixin respond-to($breakpoint) 