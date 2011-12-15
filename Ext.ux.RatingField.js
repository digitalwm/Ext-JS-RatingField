/*!
 * Ext.ux.RatingField
 * 
 * Copyright 2011, Dan Harabagiu
 * Licenced under the Apache License Version 2.0
 * See LICENSE
 *
 * 
 * Version : 0.1 - Initial coding
 */
/*global Ext : false, */

var RatingField = Ext.define('Ext.ux.RatingField', {
	extend		:	'Ext.form.Field',
    alias		:	'widget.ratingField',    
    requires	:	['Ext.form.field.VTypes', 'Ext.layout.component.field.Text'],
    //Configurable parameters
    numberOfStars	:	5,
    ratingClassOn	:	"starOn",
    ratingClassOff	:	"starOff",
    ratingClassSelected	:	"starClicked",
	/**
	 * Initialisez the elements and renders them
	 * @param {Ext.Component} The component itself
	 * @param {Object} The options object
	 * @return nothing
	 * Private Function
	 */
	onRender: function(ct, position) {
		Ext.ux.RatingField.superclass.onRender.call(this, ct, position);
		
		if(this.numberOfStars < 0 || this.numberOfStars > 10) {
			this.numberOfStars = 5;
		}
		
		this.bodyEl.update('');
		this.stars = [];
		for(var i = 1; i <= this.numberOfStars ; i++) {
			var starElement = document.createElement('div');
			starElement.setAttributeNode(this.createHtmlAttribute("key", i));
			var star = new Ext.Element(starElement);
			star.addCls(this.ratingClassOff);
			this.bodyEl.appendChild(star);
			this.stars[i - 1] = star;
		}
		var inputElement = document.createElement('input');
		inputElement.setAttributeNode(this.createHtmlAttribute("type", "hidden"));
		inputElement.setAttributeNode(this.createHtmlAttribute("name", this.getName()));
		this.hiddenField = new Ext.Element(inputElement);
		this.hiddenField.addCls('starHiddenClearMode');
		this.bodyEl.appendChild(this.hiddenField);
	},
	/**
	 * Initialise event listeners
	 * @return nothing
	 * Private function
	 */
	initEvents: function() {
		Ext.ux.RatingField.superclass.initEvents.call(this);
		
		for(var i = 0 ; i < this.stars.length ; i++) {
			this.stars[i].on('mouseenter', this.showStars, this);
			this.stars[i].on('mouseleave', this.hideStars, this);
			this.stars[i].on('click', this.selectStars, this);
		}
	},
	/**
	 * Based on click event, mark the amount of stars selected
	 * @param {Ext.EventObject} e
	 * @param {HTMLElement} t
	 * @return nothing
	 */
	selectStars : function(e, t) {
		var i = 0;
		var limitStar = t.getAttribute('key');
		
		this.setValue(limitStar);
		this.hiddenField.set({ 'value' : limitStar }, true);
		for(i = 0 ; i < this.stars.length; i++) {
			this.stars[i].removeCls(this.ratingClassSelected);
		}
		
		for(i = 0 ; i < limitStar ; i++) {
			if(this.stars[i].hasCls(this.ratingClassOn) === false) {
				this.stars[i].replaceCls(this.ratingClassOff,this.ratingClassOn);
			}
			this.stars[i].addCls(this.ratingClassSelected);
		}
	},
	/**
	 * Based on hover, show the amount of stars that will be selected
	 * @param {Ext.EventObject} e
	 * @param {HTMLElement} t
	 * @return nothing
	 */
	showStars: function(e, t) {
		var limitStar = t.getAttribute('key');
		for(var i = 0 ; i < limitStar ; i++) {
			if(this.stars[i].hasCls(this.ratingClassOn) === false && this.stars[i].hasCls(this.ratingClassSelected) === false) {
				this.stars[i].replaceCls(this.ratingClassOff,this.ratingClassOn);
			}
		}
	},
	/**
	 * Based on hover out, hide the amount of stars showed
	 * @return nothing 
	 */
	hideStars: function() {
		for(var i = 0 ; i < this.stars.length ; i++) {
			if(this.stars[i].hasCls(this.ratingClassOff) === false && this.stars[i].hasCls(this.ratingClassSelected) === false) {
				this.stars[i].replaceCls(this.ratingClassOn,this.ratingClassOff);
			}
		} 
	},
	/**
	 * Private function, that ads a html attribute to a dom element
	 * @param {string} name The name of the attribute
	 * @param {string} value The value of the attribute
	 * @return {HTMLAttribute}
	 */
	createHtmlAttribute: function(name, value) {
		var attribute = document.createAttribute(name);
		attribute.nodeValue = value;
		return attribute;
	}
});