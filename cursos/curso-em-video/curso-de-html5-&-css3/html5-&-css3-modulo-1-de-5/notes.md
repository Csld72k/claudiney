# 🕵️ Observations
* &lt;hr&gt; - The Thematic Break (Horizontal Rule) element
The  &lt;hr&gt; HTML element represents a thematic break between paragraph-level elements: for example, a change of scene in a story, or a shift of topic within a section.
Historically, this has been presented as a horizontal rule or line. While it may still be displayed as a horizontal rule in visual browsers, this element is now defined in semantic terms, rather than presentational terms, so if you wish to draw a horizontal line, you should do so using appropriate CSS.;
<hr>

* Some specials characters:<br>
![Alt text](image.png)
* &lt;b&gt; - Bold (non-semantic);
* &lt;strong&gt; - Contrast (semantic);
* &lt;i&gt; - Italic (non-semantic);
* &lt;em&gt; - Emphasis - (semantic);
* &lt;mark&gt; - Marked text;
* &lt;big&gt; - Increase font size;
* &lt;small&gt; - Decrease font size;
* &lt;del&gt; - Mark as deleted;
* &lt;ins&gt; - Mark as inserted (semantic);
* &lt;u&gt; - Underlined (non-semantic);
* &lt;sup&gt; - Superscript (X<sup>20</sup>+3);
* &lt;sub&gt; - Subscribed (H<sub>2</sub>O);
* &lt;code&gt; - To make the font style monospaced. Define some text as computer code in a document. The &lt;code&gt; tag is used to define a piece of computer code. The content inside is displayed in the browser's default monospace font. Tip: This tag is not deprecated. However, it is possible to achieve richer effect by using CSS;
* &lt;pre&gt; - To make the text be preformatted being possible change the indentation. The &lt;pre&gt; tag defines preformatted text. Text in a &lt;pre&gt; element is displayed in a fixed-width font, and the text preserves both spaces and line breaks. The text will be displayed exactly as written in the HTML source code;
* &lt;q&gt; - Quotes. Mark up a short quotation. The &lt;q&gt; tag defines a short quotation. Browsers normally insert quotation marks around the quotation. Tip: Use &lt;blockquote&gt; for long quotations.

<hr>

* &lt;blockquote&gt; - A section that is quoted from another source:
```HTML
    <blockquote cite="http://www.worldwildlife.org/who/index.html">
    For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
    </blockquote>
```
It results in:
<blockquote cite="http://www.worldwildlife.org/who/index.html">
  For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
</blockquote>
<br>
The &lt;blockquote&gt; tag specifies a section that is quoted from another source. Browsers usually indent &lt;blockquote&gt; elements (look at example below to see how to remove the indentation).
<hr>

* &lt;abbr&gt; - An abbreviation is marked up as follows: The <abbr title="World Health Organization">WHO</abbr> was founded in 1948. The &lt;abbr&gt; tag defines an abbreviation or an acronym, like "HTML", "CSS", "Mr.", "Dr.", "ASAP", "ATM". Tip: Use the global title attribute to show the description for the abbreviation/acronym when you mouse over the element.

* &lt;bdo&gt; Specify the text direction:
```HTML
<bdo dir="rtl">
This text will go right-to-left.
</bdo>
```
<bdo dir="rtl">
This text will go right-to-left.
</bdo>

BDO stands for Bi-Directional Override. The &lt;bdo&gt; tag is used to override the current text direction.
<hr>

