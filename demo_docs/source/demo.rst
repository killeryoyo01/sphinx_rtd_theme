.. This is a comment. Note how any initial comments are moved by
   transforms to after the document title, subtitle, and docinfo.

================================
Server Side scripting
================================

You can Find here Various Types of Functions/Events of Rage Multiplayer API that will let you script in your Great Server.
Server side scripting Allows you to create your own Server without Limitation. You are the key for the Limitation. Have Fun in scripting and wish you the best of Luck :D.

The Main Language for scripting in Rage Multiplayer is Node Java script. Node JS is a powerful scripting language which makes a very big affect on Grand Theft Auto V.

If you wish to learn more about Node Javascript, You can press up the link Down:

`NodeJS_`
.. _NodeJS: http://nodejs.org

.. Above is the document title, and below is the subtitle.
   They are transformed from section titles after parsing.

.. warning:: This Page is still Under Construction. You might Find some Missing Details.

.. bibliographic fields (which also require a transform):
.. contents:: Contents:
.. section-numbering::

--------------------------------
 Server-Side Events
--------------------------------

Enjoy Our plethora of events that will benefit you a lot while scripting your server.

List of Server-Side events:


Player Events
===================


PlayerJoin
-------------
**Description**: 

- This event is triggered when a player joins the server.

-------------

**Paramters**
- player player, which joined to the server.

---------

**Example**

.. sidebar:: Example Description

    The Console will log every player when he joins the server.

.. literalinclude:: test_py_module/PlayerJoin.js
    :language: javascript
    :linenos:
    :lines: 1-10
 
---------

`PlayerQuit`
-------------
**Description** 

- This event is triggered when a player leaves/disconnects the server.

---------

**Paramters**:

- ``player``: it is the player which left to the server.

-  ``exitType``:  Types of Exit:

-  **disconnect**

-  **timeout**

-  **kicked**

- ``reason``: The reason why the player disconnected/left.

---------

Example:

.. sidebar:: Example Description

    Whenever the Player disconnects or quit. The Server will announce the Reason why he left.

.. literalinclude:: test_py_module/PlayerQuit.js
    :language: javascript
    :linenos:
    :lines: 1-10
     
---------

`PlayerChat`
-------------
**Description** 

- This event is triggered when a player is chatting on  the server.


**Paramters**:

- ``player``: it is the player which talks in the chat

-  ``text``:  the text he typed on the Chat

---------

Example:

.. sidebar:: Example Description

    Whenever the Player Talks it displays his name + the Word sad. For example "Alexander" Says: Hello.

.. literalinclude:: test_py_module/PlayerChat.js
    :language: javascript
    :linenos:
    :lines: 1-10
     
---------

`PlayerDeath`
-------------
**Description** 

- This event is triggered when a player died.

---------

**Paramters**:

- ``player``: it is the player that is dead.

- ``reason``:  the reason why he Died.

- ``killer``: The player name who killed the victim

---------

Example:

.. sidebar:: Example Description

    Whenever the Player Dies. it displays a kill message, and makes you spawn in the specified Coords.

.. literalinclude:: test_py_module/PlayerDeath.js
    :language: javascript
    :linenos:
    :lines: 1-10
     
---------

--------------------------------
 Server-Side Functions
--------------------------------

This is the Serverside functions Section that you'll need to put while scripting Server-side

Vector 3 Functions
===================

**Funtions**:

- Vector3:Vector3

**Description**:

This Function Creates a Vector Object which has a float values of ``x``, ``y``, and ``z``

**Properties**:

- ``Vector3:x``

- ``Vector3:y``

- ``Vector3:z``

---------

**Example**:

.. sidebar:: Example Description

    Creates a new Vector Object with the float values `x`, `y`, and `z`.

.. literalinclude:: test_py_module/vector3.js
    :language: javascript
    :linenos:
    :lines: 1-10
    
---------    
    
    
Event functions
===================

events.add
----------

**Description**:

This function registers event handlers. It could handle more than one Server-sided Event.

**Syntax**: 

``events.add(associativeArray)``

---------

**Example**:

.. sidebar:: Example Description

    This Example shows how events.add can handle more than one Server-sided event

.. literalinclude:: test_py_module/eventsadd.js
    :language: javascript
    :linenos:
    :lines: 1-30
    
---------    

events.call
-----------

**Description**:

This function calls registered event handlers.

**Syntax**:

``events.call(eventName, optionalArguments);``

---------

**Example**:

.. sidebar:: Example Description

    This Example shows how events.call can call any Event Server-sided.

.. literalinclude:: test_py_module/eventscall.js
    :language: javascript
    :linenos:
    :lines: 1-30
    
---------    

Player functions
===================

- **Functions**:

Player.spawn
-----------

**Description**: 

This Function spawns the player in a specific Place.

**Syntax**:

``player.spawn(Vector3 position);``

---------

**Example**:

.. sidebar:: Example Description

    This Example makes the player spawn in a specific x, y , and z coords after they connect to the server with a Franklin Skin.

.. literalinclude:: test_py_module/playerSpawn.js
    :language: javascript
    :linenos:
    :lines: 1-30

---------    

Player.outputChatBox
-----------

**Description**:

This Function writes in the Chatbox to the player

**Syntax**:

``player.outputChatBox(String reason);``

-------

**Example**:

.. sidebar:: Example Description

    This Example writes the player in the chat a welcome message when he joins.

.. literalinclude:: test_py_module/playerOutputchat.js
    :language: javascript
    :linenos:
    :lines: 1-30
    
--------    

Player.giveWeapon
-----------

**Description**:

This Function gives weapons to the Player.

**Syntax**:

``player.giveWeapon(Number/Array weaponHash, Number ammo);``

-------

**Example**:

.. sidebar:: Example Description

    This Example makes the player write /weapon, and then it gives him a Assualt Rifle

.. literalinclude:: test_py_module/playergiveweapon.js
    :language: javascript
    :linenos:
    :lines: 1-30
    
--------    

Player.getClothes
-----------

**Description**:

This Function gives weapons to the Player.

**Syntax**:

``Object player.getClothes(Number componentNumber);``

**Components**:

- 0 ~ Head
- 1 ~ Beard
- 2 ~ Hair
- 3 ~ Torso
- 4 ~ Legs
- 5 ~ Hands
- 6 ~ Foot
- 7 ~ None?
- 8 ~ Accessories like parachute, scuba tank
- 9 ~ Accessories like bags, mask, scuba mask
- 10 ~ Decals and mask
- 11 ~ Auxiliary parts for torso

**Object keys**:
- drawable ~ ID of clothing.
- texture ~ ID of texture.
- palette ~ ID of palette.

-------

**Example**:

.. sidebar:: Example Description

    This Example makes the player write /getClothes [Component_ID], and then it gives him The Object Keys.

.. literalinclude:: test_py_module/playergetclothes.js
    :language: javascript
    :linenos:
    :lines: 1-30
    
--------    

Player.setClothes
-----------

**Description**:

This Function Sets cloth for the Player

**Syntax**:

``player.setClothes(Number componentNumber, Number drawable, Number texture, Number palette)``

**Components**:

- 0 ~ Head
- 1 ~ Beard
- 2 ~ Hair
- 3 ~ Torso
- 4 ~ Legs
- 5 ~ Hands
- 6 ~ Foot
- 7 ~ None?
- 8 ~ Accessories like parachute, scuba tank
- 9 ~ Accessories like bags, mask, scuba mask
- 10 ~ Decals and mask
- 11 ~ Auxiliary parts for torso

-------

**Example**:

.. sidebar:: Example Description

    This Example sets cloth for the player when he does the Command correctly.

.. literalinclude:: test_py_module/playersetclothes.js
    :language: javascript
    :linenos:
    :lines: 1-30
    
--------

Player.getProp and Player.setProp
-----------

**Description**:

``getProp``:

This Function gives you the prop ID of the Item.

``setProp``:

This function set prop for a player.

**Syntax for** ``getProp``:

``let prop = player.getProp(Number propID)``

**Syntax for** ``setProp``:

``player.setProp(Number propID, Number drawable, Number texture)``

**Props**:

- 1 ~ Helmets, hats, earphones, masks

- 2 ~ Glasses

- 3 ~ Ear accessories

-------

**Example for** ``getProp`` :

.. sidebar:: Example Description

    This example outputs a prop from prop ID.

.. literalinclude:: test_py_module/playergetprop.js
    :language: javascript
    :linenos:
    :lines: 1-30
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    **Example for** ``setProp`` :

.. sidebar:: Example Description

    This example sets a Prop to the Player.

.. literalinclude:: test_py_module/playersetprop.js
    :language: javascript
    :linenos:
    :lines: 1-30
    
--------    

Player.putIntoVehicle
-----------

**Description**:

This Function Puts the player in a certain Vehicle.

**Syntax**:

``player.putIntoVehicle( vehiclename , seat number)``

**Seat Numbers**:

- 0 ~ driver seat
- 1 ~ passenger seat 1
- 2 ~ passenger seat 2
- 3 ~ passenger seat 3

-------

**Example**:

.. sidebar:: Example Description

    This Example Creates a vehicle and puts the player inside it

.. literalinclude:: test_py_module/putintovehicle.js
    :language: javascript
    :linenos:
    :lines: 1-30
    
--------    

Player.removeFromVehicle
-----------

**Description**:

This Function Removes the Player from the Vehicle.

**Syntax**:

``player.removeFromVehicle()``

-------



- A bullet list

  + Nested bullet list.
  + Nested item 2.

- Item 2.

  Paragraph 2 of item 2.

  * Nested bullet list.
  * Nested item 2.

    - Third level.
    - Item 2.

  * Nested item 3.

Enumerated Lists
----------------

1. Arabic numerals.

   a) lower alpha)

      (i) (lower roman)

          A. upper alpha.

             I) upper roman)

2. Lists that don't start at 1:

   3. Three

   4. Four

   C. C

   D. D

   iii. iii

   iv. iv

#. List items may also be auto-enumerated.

Definition Lists
----------------

Term
    Definition
Term : classifier
    Definition paragraph 1.

    Definition paragraph 2.
Term
    Definition

Field Lists
-----------

:what: Field lists map field names to field bodies, like database
       records.  They are often part of an extension syntax.  They are
       an unambiguous variant of RFC 2822 fields.

:how arg1 arg2:

    The field marker is a colon, the field name, and a colon.

    The field body may contain one or more body elements, indented
    relative to the field marker.

Option Lists
------------

For listing command-line options:

-a            command-line option "a"
-b file       options can have arguments
              and long descriptions
--long        options can be long also
--input=file  long options can also have
              arguments

--very-long-option
              The description can also start on the next line.

              The description may contain multiple body elements,
              regardless of where it starts.

-x, -y, -z    Multiple options are an "option group".
-v, --verbose  Commonly-seen: short & long options.
-1 file, --one=file, --two file
              Multiple options with arguments.
/V            DOS/VMS-style options too

There must be at least two spaces between the option and the
description.

Literal Blocks
--------------

Literal blocks are indicated with a double-colon ("::") at the end of
the preceding paragraph (over there ``-->``).  They can be indented::

    if literal_block:
        text = 'is left as-is'
        spaces_and_linebreaks = 'are preserved'
        markup_processing = None

Or they can be quoted without indentation::

>> Great idea!
>
> Why didn't I think of that?

Line Blocks
-----------

| This is a line block.  It ends with a blank line.
|     Each new line begins with a vertical bar ("|").
|     Line breaks and initial indents are preserved.
| Continuation lines are wrapped portions of long lines;
  they begin with a space in place of the vertical bar.
|     The left edge of a continuation line need not be aligned with
  the left edge of the text above it.

| This is a second line block.
|
| Blank lines are permitted internally, but they must begin with a "|".

Take it away, Eric the Orchestra Leader!

    | A one, two, a one two three four
    |
    | Half a bee, philosophically,
    |     must, *ipso facto*, half not be.
    | But half the bee has got to be,
    |     *vis a vis* its entity.  D'you see?
    |
    | But can a bee be said to be
    |     or not to be an entire bee,
    |         when half the bee is not a bee,
    |             due to some ancient injury?
    |
    | Singing...

Block Quotes
------------

Block quotes consist of indented body elements:

    My theory by A. Elk.  Brackets Miss, brackets.  This theory goes
    as follows and begins now.  All brontosauruses are thin at one
    end, much much thicker in the middle and then thin again at the
    far end.  That is my theory, it is mine, and belongs to me and I
    own it, and what it is too.

    -- Anne Elk (Miss)

Doctest Blocks
--------------

>>> print 'Python-specific usage examples; begun with ">>>"'
Python-specific usage examples; begun with ">>>"
>>> print '(cut and pasted from interactive Python sessions)'
(cut and pasted from interactive Python sessions)

Tables
------

Here's a grid table followed by a simple table:

+------------------------+------------+----------+----------+
| Header row, column 1   | Header 2   | Header 3 | Header 4 |
| (header rows optional) |            |          |          |
+========================+============+==========+==========+
| body row 1, column 1   | column 2   | column 3 | column 4 |
+------------------------+------------+----------+----------+
| body row 2             | Cells may span columns.          |
+------------------------+------------+---------------------+
| body row 3             | Cells may  | - Table cells       |
+------------------------+ span rows. | - contain           |
| body row 4             |            | - body elements.    |
+------------------------+------------+----------+----------+
| body row 5             | Cells may also be     |          |
|                        | empty: ``-->``        |          |
+------------------------+-----------------------+----------+

=====  =====  ======
   Inputs     Output
------------  ------
  A      B    A or B
=====  =====  ======
False  False  False
True   False  True
False  True   True
True   True   True
=====  =====  ======

Footnotes
---------

.. [1] A footnote contains body elements, consistently indented by at
   least 3 spaces.

   This is the footnote's second paragraph.

.. [#label] Footnotes may be numbered, either manually (as in [1]_) or
   automatically using a "#"-prefixed label.  This footnote has a
   label so it can be referred to from multiple places, both as a
   footnote reference ([#label]_) and as a hyperlink reference
   (label_).

.. [#] This footnote is numbered automatically and anonymously using a
   label of "#" only.

.. [*] Footnotes may also use symbols, specified with a "*" label.
   Here's a reference to the next footnote: [*]_.

.. [*] This footnote shows the next symbol in the sequence.

.. [4] Here's an unreferenced footnote, with a reference to a
   nonexistent footnote: [5]_.

Citations
---------

.. [CIT2002] Citations are text-labeled footnotes. They may be
   rendered separately and differently from footnotes.

Here's a reference to the above, [CIT2002]_, and a [nonexistent]_
citation.

Targets
-------

.. _example:

This paragraph is pointed to by the explicit "example" target. A
reference can be found under `Inline Markup`_, above. `Inline
hyperlink targets`_ are also possible.

Section headers are implicit targets, referred to by name. See
Targets_, which is a subsection of `Body Elements`_.

Explicit external targets are interpolated into references such as
"Python_".

.. _Python: http://www.python.org/

Targets may be indirect and anonymous.  Thus `this phrase`__ may also
refer to the Targets_ section.

__ Targets_

Here's a `hyperlink reference without a target`_, which generates an
error.

Duplicate Target Names
``````````````````````

Duplicate names in section headers or other implicit targets will
generate "info" (level-1) system messages.  Duplicate names in
explicit targets will generate "warning" (level-2) system messages.

Duplicate Target Names
``````````````````````

Since there are two "Duplicate Target Names" section headers, we
cannot uniquely refer to either of them by name.  If we try to (like
this: `Duplicate Target Names`_), an error is generated.

Directives
----------

.. contents:: :local:

These are just a sample of the many reStructuredText Directives.  For
others, please see
http://docutils.sourceforge.net/docs/ref/rst/directives.html.

Document Parts
``````````````

An example of the "contents" directive can be seen above this section
(a local, untitled table of contents_) and at the beginning of the
document (a document-wide `table of contents`_).

Images
``````

An image directive (also clickable -- a hyperlink reference):

.. image:: images/title.png
   :target: directives_

A figure directive:

.. figure:: images/title.png
   :alt: reStructuredText, the markup syntax

   A figure is an image with a caption and/or a legend:

   +------------+-----------------------------------------------+
   | re         | Revised, revisited, based on 're' module.     |
   +------------+-----------------------------------------------+
   | Structured | Structure-enhanced text, structuredtext.      |
   +------------+-----------------------------------------------+
   | Text       | Well it is, isn't it?                         |
   +------------+-----------------------------------------------+

   This paragraph is also part of the legend.

A figure directive with center alignment

.. figure:: images/title.png
   :align: center
   :width: 300

Admonitions
```````````

.. Attention:: Directives at large.

.. Caution::

   Don't take any wooden nickels.

.. DANGER:: Mad scientist at work!

.. Error:: Does not compute.

.. Hint:: It's bigger than a bread box.

.. Important::
   - Wash behind your ears.
   - Clean up your room.
   - Call your mother.
   - Back up your data.

.. Note:: This is a note.

.. Tip:: 15% if the service is good.

.. WARNING:: Strong prose may provoke extreme mental exertion.
   Reader discretion is strongly advised.

.. admonition:: And, by the way...

   You can make up your own admonition too.

Topics, Sidebars, and Rubrics
`````````````````````````````

.. sidebar:: Sidebar Title
   :subtitle: Optional Subtitle

   This is a sidebar.  It is for text outside the flow of the main
   text.

   .. rubric:: This is a rubric inside a sidebar

   Sidebars often appears beside the main text with a border and
   background color.

.. topic:: Topic Title

   This is a topic.

.. rubric:: This is a rubric

Target Footnotes
````````````````

.. target-notes::

Replacement Text
````````````````

I recommend you try |Python|_.

.. |Python| replace:: Python, *the* best language around

Compound Paragraph
``````````````````

.. compound::

   This paragraph contains a literal block::

       Connecting... OK
       Transmitting data... OK
       Disconnecting... OK

   and thus consists of a simple paragraph, a literal block, and
   another simple paragraph.  Nonetheless it is semantically *one*
   paragraph.

This construct is called a *compound paragraph* and can be produced
with the "compound" directive.

Substitution Definitions
------------------------

An inline image (|example|) example:

.. |EXAMPLE| image:: images/biohazard.png

(Substitution definitions are not visible in the HTML source.)

Comments
--------

Here's one:

.. Comments begin with two dots and a space. Anything may
   follow, except for the syntax of footnotes, hyperlink
   targets, directives, or substitution definitions.

   Double-dashes -- "--" -- must be escaped somehow in HTML output.

(View the HTML source to see the comment.)

Field Lists
===========

:Field List:
    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
    ex ea commodo consequat.

    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
    dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

some text

:Field List 2: Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor

Error Handling
==============

Any errors caught during processing will generate system messages.

|*** Expect 6 errors (including this one). ***|

There should be six messages in the following, auto-generated
section, "Docutils System Messages":

.. section should be added by Docutils automatically

demo.rst from: http://docutils.sourceforge.net/docs/user/rst/demo.txt
