# ![BashOffice](test.bashnetwork.com/public/images/Bash-Logo-150x150.png "Bashnetwork")

## Contents
- [Description](#description)
- [Usage](#usage)
- [Elements](#elements)
    - [Index](#index)
    - [Post](#post)
- [Notes](#notes)

## Description

Bashnetwork's blog - is a blog built on Jekyll and published with Github Pages.

## Usage

Basic usage is a normal blog one.
Content editor builds blogs and posts them directly into the blog's github repository which in turn displays the project on Github Pages.

## Elements

### Index

The index page consists of three main sections

- #### Featured Blogs
    Displays a few selected featured blogs

- #### Categories Selector

    A section containing all the categories available for selection

- #### Most Recent

    A short view of a paginated amount of the most recent blogs available

### Post

The Blog must contain certain elements:
    - Title
    - A short description
    - Author
    - Publisher (default: Bashnetwork)
    - Image (whenever available)
      - Title for the image
      - A Short description of the image
    - Tags applied to the post
    - Categories to which the post belongs to
    - Language (the language the article is written on)
    - Reference "ref" (a reference key word that relates same post in different languages)
    - Global presence (Either "yes" or leave blank)
    - Region
      - City
      - State (used un the USA only)
      - Country
    - Date of Creation (added automatically)
    - Blog content

### Tags Index

A list of existing tags and the articles that contain them in the selected language.

### Category Index

A list of existing categories and the articles that contain them in the selected language.

## Notes
For any questions please contact israel@bashnetwork.com


#### TODOS
  ° For grabbing location from users my use :
    $.ajax( {
      url: '//freegeoip.net/json/',
      type: 'POST',
      dataType: 'jsonp',
      success: function(location) {
        // example where I update content on the page.
        $('body').empty().html(location.country_code);
      }
    } );
  ° Global option on creation
