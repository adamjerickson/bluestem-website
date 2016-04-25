# Block

inuitcss’ Block object simply stacks an image on top of some text content.

This incredibly frequently occurring design pattern is now wrapped up in a
simple, reusable, configurable abstraction.

## Dependencies

* settins/defaults
* tools/functions

## Usage

Basic usage of the Block object uses the required classes:

    <div class="block">
        <img src="/path/to/image.png" alt="" class="block__img" />
        <div class="block__body">
            <p>Text-like content goes here.</p>
        </div>
    </div>

The only valid children of the `.block` node are `.block__img` and
`.block__body`.

## Options

Other, optional classes can supplement the required base classes:

* `.block--flush`: remove the space between the stacked image- and text-content.
* `.block--[tiny|small|large|huge]`: alter the spacing between the stacked
  image- and text-content.
* `.block--[center|right]`: align both the image- and text-content.

For example:

    <div class="block  block--small  block--center">
        <img src="/path/to/image.png" alt="" class="block__img" />
        <div class="block__body">
            <p>Text-like content goes here.</p>
        </div>
    </div>


# Box

The Box object simply boxes off content.

## Dependencies

* settings/defaults
* tools/functions
* trumps/clearfix

## Usage

Basic usage of the Box object uses the required classes:

    <div class="box">
        Foo Bar Baz
    </div>

## Options

Other, optional classes can supplement the required base classes:

* `.box--flush`: remove all padding from boxes.
* `.box--[tiny|small|large|huge]`: alter the padding on boxes.

For example:

    <div class="box  box--large">
        Foo Bar Baz
    </div>


# The button object

inuitcss’ button object is a simple, robust, extensible baseline for building
entire suites of buttons onto.

## Dependencies

* settings/defaults
* tools/functions


# The flag object

The `flag` object module is an object similar in appearance to [the media
object](https://github.com/inuitcss/objects.media), but which provides slightly
more advanced functionality.

## Dependencies

* settings/defaults
* tools/functions


# Layout

inuitcss’ `layout` system is a powerful, flexible, highly advanced evolution of
the traditional grid system. It is based on
[csswizardry-grids](http://csswizardry.com/csswizardry-grids/).

## Dependencies

* settings/defaults
* tools/functions


# The list-bare object

The `list-bare` object simply removes bullets and indents from lists.

## Dependencies

* settings/defaults


# The list-block object

The `list-block` object simply creates blocky lists from `ul`s or `ol`s.

## Dependencies

* settins/defaults
* tools/functions


# List-inline

The List-inline object simply displays a list as one horizontal row.

## Dependencies

* settins/defaults


## Usage

Basic usage of the List-inline object uses the required classes:

    <ul class="list-inline">
        <li>Foo</li>
        <li>Bar</li>
        <li>Baz</li>
    </ul>

The only valid children of the `.list-inline` node are `li`s.

## Options

Other, optional classes can supplement the required base classes:

* `.list-inline--delimited`: add a character to delimit list items.

For example:

    <ul class="list-inline  list-inline--delimited">
        <li>Foo</li>
        <li>Bar</li>
        <li>Baz</li>
    </ul>

If you wish to completely remove the whitespace between items, omit the closing
`</li>` tag:

    <ul class="list-inline">
        <li>Foo
        <li>Bar
        <li>Baz
    </ul>


# The list-ui object

The `list-ui` object creates blocky, keyline-delimited list items.

## Dependencies

* settins/defaults
* tools/functions


# Media

The Media object module is inuitcss’ implementation of [Nicole
Sullivan](https://twitter.com/stubbornella)’s <cite>media object</cite>—the
poster child of OOCSS.

To find out where it all started, read [Nicole’s blog
post](http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/).

## Dependencies

* settins/defaults
* tools/functions
* trumps/clearfix


## Usage

Basic usage of the Media object uses the required classes:

    <div class="media">
        <img src="/path/to/image.png" alt="" class="media__img" />
        <div class="media__body">
            <p>Text-like content goes here.</p>
        </div>
    </div>

The only valid children of the `.media` node are `.media__img` and
`.media__body`.

## Options

Other, optional classes can supplement the required base classes:

* `.media--flush`: remove the space between the image- and text-content.
* `.media--[tiny|small|large|huge]`: alter the spacing between the image- and
  text-content.
* `.media--rev`: reverse the horizontal rendered order of the image- and
  text-content.
* `.media--responsive`: a very basic responsive implementation of the media
  object. Pragmatic; far from perfect.

For example:

    <div class="media  media--flush  media--rev">
        <img src="/path/to/image.png" alt="" class="media__img" />
        <div class="media__body">
            <p>Text-like content goes here.</p>
        </div>
    </div>


# Pack

inuitcss’ Pack object simply causes any number of elements pack up horizontally
to automatically fill an equal, fluid width of their parent.

## Dependencies

* settins/defaults
* tools/functions

## Usage

Basic usage of the Pack object uses the required classes:

    <div class="pack">
        <div class="pack__item">
            Foo
        </div>
        <div class="pack__item">
            Bar
        </div>
        <div class="pack__item">
            Baz
        </div>
    </div>

The only valid children of the `.pack` node are `.pack__item`s.

## Options

Other, optional classes can supplement the required base classes:

* `.pack--auto`: cause packed items to have an automatically determined,
  non-equal width.
* `.pack--[tiny|small|large|huge]`: alter the gutter between pack items.
* `.pack--rev`: reverse the rendered horizontal order of packed items.
* `.pack--[middle|bottom]`: align packed items to the middles or bottoms of each
  other.

For example:

    <div class="pack  pack--small  pack--rev">
        <div class="pack__item">
            Foo
        </div>
        <div class="pack__item">
            Bar
        </div>
        <div class="pack__item">
            Baz
        </div>
    </div>


# The tables objects

inuitcss has some useful helpers for common table patterns.

## Dependencies

* settins/defaults
* tools/mixins
* generic/normalize


# The tabs object

The `tabs` object is a simple abstraction for force a series of elements
(usually a list) into an equal-width, tab-like format.

## Dependencies

* settins/defaults
