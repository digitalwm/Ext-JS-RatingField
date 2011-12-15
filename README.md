# About.
 It is a Ext JS extension that will provide a rating with stars field inside a standard form. It has some customisation possible
    
# How to use it?
 Download the Ext.ux.RatingField.js, Ext.ux.RatingField.css and starOn.png and starOff.png to your server, include it into the HEAD of your page (After the Ext JS inclusion). For more details please have a look at the demo.html

# Screenshot?
 [ Flickr ] (http://www.flickr.com/photos/harabagiu_dan/6515876139/)
 
# Configuration?

    {
    	//Standard options
	fieldLabel	:	'How cool is this?',
	name		:	'coolrating',
	anchor		:	'100%',
	xtype		:	'ratingField',
	//Custom options
	numberOfStars	:	5,
    	ratingClassOn	:	"starOn",
    	ratingClassOff	:	"starOff",
    	ratingClassSelected	:	"starClicked",
    }

# Explenations?

* _numberOfStars_ : The number of stars to use for rating (minimum 1 maximum 10)
* _ratingClassOn_ : The CSS class for stars that are hovered or selected
* _ratingClassOff_ : The CSS class for stars that are not selected or hovered
* _ratingClassSelected_ : The CSS class for stars that are selected

# Does it work?

 I have tested it on Chrome, Firefox 9, IE 8, IE 7 and IE 9

# Enjoy it, and drop me a line if you like it