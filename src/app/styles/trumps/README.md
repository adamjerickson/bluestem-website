# Clearfix

The inuitcss `clearfix` module is a minimal clearfix helper class.


# Spacing

The inuitcss `spacing` module is a small collection of helper classes for
spacings like margin and padding.

## Dependencies

* settins/defaults
* tools/functions

## Usage

The conventions used in the classes in the spacing module are as follows:

    .[negative][type][direction][size] {}

E.g.:

* `.-mt+` will give you a large (`+`) negative (`-`) margin (`m`) top (`t`).
* `.p--` will give you a tiny (`--`) padding (`p`).
* `.mh++` will give you a huge (`++`) horizontal (`h`) margin (`m`).
* `.mb0` will give you no (`0`) margin (`m`) bottom (`b`).
* `.pl-` will give you a small (`-`) padding (`p`) left (`l`).

Knowing these conventions means you can compose a huge array of spacing helpers.


# Spacing-responsive

The inuitcss `spacing-responsive` module provides breakpoint-based classes for
nudging margins and paddings around responsively, e.g. `.lap-mb0`, `.desk-mb++`.

## Dependencies

* settins/defaults
* settins/responsive-settigns
* tools/responsive-tools
* trumps/spacing


# Widths

The inuitcss `widths` module is a simple file of helper classes to drop widths
onto elements such as grid systems.

## Dependencies

* settings/defaults
* tools/tools-widths

## Usage

inuitcss’ widths classes are available in one of two formats. The default format
is fraction-like, e.g.: `<div class="u-1/2">`.

The other available format is spoken-word, e.g. `<div class="u-1-of-2">`.
Enable this by predefining the `$inuit-use-fractions` feature switch, e.g.:

    $inuit-use-fractions:    false;
    @import "path/to/trumps.widths";


# Widths-responsive

The inuitcss `widths-responsive` module is an extension of the default [`widths`
module](https://github.com/inuitcss/trumps.widths).

## Dependencies

* settings/defaults
* settings/responsive-settings
* tools/responsive-tools
* tools/tools-widths
* trumps/widths

## Usage

`widths-responsive` loops through the breakpoints defined in
`settings.responsive` to generate prefixed breakpoint-based classes. If you are
using inuitcss’ default breakpoints, you will be given classes like
`u-1/4-lap-and-up`, or `u-1-of-2-desk`, etc.
