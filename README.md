# Udacity FEND - Cat Clicker Project

Welcome to _Dusty's_ Cat Clicker. This was created from scratch.

I got a little carried away with the design layout.

## Folder Layout

As you can see there are just 3 folders within this repository:
  * _test_: This is the folder which will hold the code that is still under testing
  * _src_: Contains the source code of my Mobile Profile site. The easy to read and edit version of the site.
  *_dist_: This is the distribution code of my site. All the code here is just the minified versions of the source code.


## Creating Distribution Ready Code From Your Source Code

Once you've tweeked your source code to your liking, its  time to minify your HTML, CSS and JS. Also lets not forgot about optimizing your images as well! Don't just minify your source code files! This is very important to leave your source code files in form that is easily readable and edited, should they require it in the future.

The best way to produce your distribution ready site is to use a tool like gulp or grunt which automates this process. The amount of time saved compared to the amount time needed to learn gulp or grunt is exponecially huge!

Pick which ever tool you find works best for you, but for my project, Gulp is used.

### Setting up Gulp.

As I develope on a Windows machine, these instructions are for windows users, but for the most part I believe they should work on Mac's as well as I use Git's Bash command line (Instead of PowerShell).

1. Install npm on your machine
    * The simplest way of doing this is installing [Node JS]

2. Install Gulp Globally - _using command line_
    * Make sure to include the '-g' flag. This tells npm to install it globally.
    ```sh
    $ npm install gulp -g
    ```

3. Run npm install program - _using command line_
  * As you have already downloaded my project, you have my **package.json** file, which has a list of all the dependencies and devdependencies needed for the project. By running 'npm install', your tell npm to run it's 'install' package on all the dependencies & devdependencies located within the package.json file
  * This is quicker than installing each gulp package required seperately
    ```sh
    $ npm install
    ```
      *Small side note, gulp-eslint doesn't always install correctly. You may have to install it a second time to make sure.
      ```sh
      $npm install gulp-eslint
      ```

4. Start testing your website
  * Just run gulp. This will create the test version of your site within the 'test' folder and start the local server.
  ```sh
  $ gulp
  ```

  a. Run your local server for testing
  * Using 'gulp serve:dev' you can launch the website. **Serve** will watch to see if any changes are made to the source files, create the testing version of those file, than update the browser for you.
  ```sh
  $ gulp serve:dev
  ```
  * Should you like to make any changes to the site and make it your own, just start editing the file within the 'src' folder, **Serve** will handle the rest.

5. Run your Production ready Site
  * You're finished editing the site to your liking, give it one last test and run the 'serve:dist' task. This will export you project to the 'dist' folder while also creating the smallest version of each file.
  ```sh
  $ gulp serve:dist
  ```

6. Export your production ready project
  * This will fill your 'dist' folder with your production ready code, then zip up both the 'src' & 'dist' folders. Giving you one file to send off.
  ```sh
  $ gulp export
  ```

## Attribution

  Cat Picture 1: https://www.flickr.com/photos/poplinre/625069434/in/photostream/
  Cat Picture 2: https://www.flickr.com/photos/chewie/2290467335
  Cat Picture 3: https://www.flickr.com/photos/dmzhuk1/13336297525/
  Cat Picture 4: https://www.flickr.com/photos/haituoi/12174748174/
  Cat Picture 5: https://www.flickr.com/photos/crerwin/1090235720/in/photolist-fpoqBx-2EkK6A-jd89Zh-oXYAc3-rbR7a7-eQyQ9s-pNfUb3-f8Lzve-7wUUmJ-neyNMh-fF1SNo-guvpL7-djzdoC-rRUeFg-dwECB4-byETEf-96GXNo-nD8t86-i3Px3A-eSjzEX-e8hn6f-u4ANKb-aj5nzB-bCywUs-7CnHSG-amRMr6-gsgu54-sBnYXd-doMGnr-rjNQrb-7xQDb4-e5tZLn-swMbdu-aVfJNM-bwJzGz-f3mWZv-qAudKg-76Vzfm-kb2n93-4BignY-96GXk5-hoYTLY-pLcapW-r6ud1t-qd3RjQ-4rPruQ-nF4Ynj-9oXBFj-5hJtCy-fJ6ud6
  Cat Picture 6: https://www.flickr.com/photos/jetske
  Cat Picture 7: https://www.flickr.com/photos/8494589@N06/2177097057


## The TO-DO List

1. Make a hamberger mobile menu
    * Not part of the project guidelines but it's good practice!

[GO-CSS]: <https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery> "Google's Optimized CSS Delivery"
[GitHub Pages]: <https://pages.github.com/> "GitHub hosting solution GitHub Pages"
[Node JS]: <https://nodejs.org/en/> "Node.JS's main page"
