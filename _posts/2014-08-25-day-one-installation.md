---
layout: post
title:  "HECreek, Day One - Installation"
date:   2014-08-25 12:30:43
categories: [Hecreek, Webdev]
description: Installing Jekyll and Creating Github pages for organization account
keywords: jekyll, github pages
image: hecreek-day-one.png
---
Everyday I like to explore new technologies and new tools that help me introduce the most creative and original ideas for my customers. As promised in my last post, I'll blog my daily updates about [HECreek][hecreek] development process in tutorial like posts and also as a documentation to my process... 

**Day I tasks were:**

1. Choosing the name & Register a Domain.
2. Creating an official email & related social accounts.
3. Create a Github organization account & Point domain to Github repo.
4. Install Jekyll & create new project.
5. Upload Jekyll output to the main site.
6. Create a quick logo & choose brand colors.

---

####1. Choosing the name & Register a Domain:####
---
Finding a domain that is available across all social networks and also easily to remember and a .com domain is now challenging... In order to find the perfect domain I do some research first:

- First, I went to [Name Mesh][namemesh] and start typing some words that will describe your domain... I was trying to find a name that indicates a continues flow or stream for thoughts... Then I get pumped with the word "Creek" so I simply added my initials to it "he" to get "hecreek".
- Then I went to [Google Translate][gtranslate] typed the word to make sure it doesn't mean something bad in any common language and used the voice button to hear how it will sound, and it was smooth and easily to remember that my daughter kept repeating it for a while.
- Next step is to check availability, I went to [NameCheckr][namecheckr] and typed "hecreek" and was so glad to find it available on all social networks and all top level common domains.
- Now it's register time, I went to [FatWallet][fatwallet] to check new deals from [GoDaddy][godaddy] and stumbled upon a [$1.99 .com coupon with 14% Cash Back][cashback]... What a deal... I head over to [GoDaddy][godaddy] and started the check out process to purchase my domain.

---

####2. Creating an official email & related social accounts:####
---
As mentioned earlier, I'll be hosting my site files over GitHub... So I'll point my domain later to GitHub servers but there won't be email servers out there... So how to solve this?! You've an option out of two:

1. Purchasing an email service like [Google Apps for Business][gapps] or even [GoDaddy Email][gomail].
2. Purchasing a shared hosting account.

Luckily for me I have a shared hosting account, so I did the following:

- From my cPanel, I added my new domain as an "Addon Domain" to that server.
- Went to email wizard under my cPanel and create the first email account that I will use and make public.
- Then I head over to my domain provider and started editing the DNS Zone by creating 3 new A (host) records & 1 MX (Mail Exchanger) Record with the following:
	* A record: "mail" points to "Server Main IP" with 1 hour TTL.
	* A record: "ns1" points to "Hosting NameServer 1 IP" with 1 hour TTL.
	* A record: "ns2" points to "Hosting NameServer 1 IP" with 1 hour TTL.
	* MX record: Priority "0" host "@" points to "mail.hecreek.com"
- Now you're ready to go, start testing by sending and receiving via your favorite mail client... Believe it or not but my favorite till date mail client on mac is the default Apple Mail App... Although I used lots of other apps "which I might review in future posts", but still the default Mail app is my favorite...
- Once the email is ready, I head over to all social networks that I am interested in registering my new business for and start creating my user names using my newly created email accounts.

---

####3. Create a Github organization account & Point domain to Github repo:####
---
Now the fun part begins, If you have a [GitHub Account][github] head over to your account and create a new organization account for your desired name or you can simply use your default account based on your needs... In my case I am creating a new organization for [hecreek][hecreek] where I will be posting my official portfolio and services I provide along with making it my testin environment and playground of all new techs I learn on daily basis... Now the organization account is ready let's create our first repo:

- Create a new repo and make sure it's name is "yourorganization.github.io", in my case it was "hecreel.github.io" and then start the repo with a README file.
- Once the repo is created, create a new file inside the repo and name it "CNAME" and include only one line on it containing your domain name, in my case the file included "www.hecreek.com".
- Now I went back to my domain provider and created 2 new A(host) records and one CName (Alias) record with the following data:
	* A record: "@" points to "Github IP 192.30.252.153" with 10 minutes TTL.
	* A record: "@" points to "Github IP 192.30.252.154" with 10 minutes TTL.
	* CName Record: "www" points to "yourorganization.github.io".
- If everything went well, you should be introduced with Github 404 error page when you try to access your domain or organization github url.

**My DNS zone file now looks like this:**

![DNS Zone file]({{ site.baseurl }}/assets/img/post-attachments/hecreek_dnszone.png)

---

####4. Install jekyll & create new project:####
---
If you're a Mac user then Ruby is already installed on your machine, for Windows you can read [Ruby documentation][ruby] and install Ruby first using the [Ruby Installer for Windows][rubyinstall]. Now it's time to install the Jekyll gem... Open your terminal and type:
{% highlight bash %}
~$ gem install jekyll
{% endhighlight %}
Once installed navigate to the folder where you will keep the source-code of your installation and then type :
{% highlight bash %}
~$ jekyll new mywebsite
{% endhighlight %}
The navigate to your newly created application:
{% highlight bash %}
~$ cd mywebsite
{% endhighlight %}
Now it's time to serve your website locally:
{% highlight bash %}
~/mywebsite $ jekyll serve
# => Now browse to http://localhost:4000
{% endhighlight %}
Your demo site is now ready and it should look something like this:

![Jekyll Demo Installation]({{ site.baseurl }}/assets/img/post-attachments/jekyll_welcome.png)
To stop the server simply press <code>Ctrl + C</code> ...

---

####5. Upload Jekyll output to the main site:####
---
Now the fun part is starting, in order to automate the site generating and directly place it into the organization repo. I cloned the hecreel.github.io repo to my laptop. Then I navigated to my Jekyll source folder, opened my "<strong>_config.yml</strong>" file and starting editing the information on it... Then added 2 new lines to tell Jekyll where to place the output as follows:
{% highlight ruby %}
source: /Path/to/Jekyll/website/source
destination: /Path/to/Github/Cloned/Repo
{% endhighlight %}
This will overwrite all files on your cloned repo folder which currently should only contain the "CNAME" & "README.md" files, so before generating the site, copy those 2 files into your Jekyll website source folder... Now run the Jekyll serve command on the terminal and add <code>--watch</code> switch to watch the source folder and regenerate the site once changes are made and saved
{% highlight bash %}
~/mywebsite $ jekyll serve --watch
{% endhighlight %}
Now you are ready to push your site to your Github... Allow Github 10 mins to serve your new pages, then serve to your domain and you should be presented by your newly generated website 

![HECreek Welcome]({{ site.baseurl }}/assets/img/post-attachments/hecreek_welcome.png)

---

####6. Create a quick logo & choose brand colors:####
---
Creating a logo and choosing brand colors is essential for your business image. If you are a designer then ignore the following you should have made it before all the above, else follow up with me on this simple typeface logo process:

- I preferred to have a Typeface logo, so first I need to choose a font which works perfect on the web as well as on print... So my choice would be going to [Google WebFonts][gwebfonts] and on the <strong>Preview Text</strong> I typed my business name to preview how it will look like in different text types at once... I selected 3 fonts and made sure that they have different variations from being light to bold... I then installed those fonts to my machine using [Skyfonts][skyfonts]...
- I opened up my [Illustrator][illustrator] and started to play around with those fonts and place them together with my company name

![HECreek Font Illustration]({{ site.baseurl }}/assets/img/post-attachments/hecreek_font_illustration.png)
- I selected [EXO2][exo2] webfont to my the official primary font for headers and [Roboto][roboto] to be the secondary font for paragraphs form the selected fonts I downloaded.
- Now it's color time, I went over to [Flat UI Color Picker][flatuicolor] and started testing different background colors for my logo, ended up with a sweet color palate

![HECreek Colors]({{ site.baseurl }}/assets/img/post-attachments/hecreek_colors.png)
- Then let's put all those elements together in our logo, and voila...

[![HECreek logo]({{ site.baseurl }}/assets/img/post-attachments/hecreek_logo.png)][hecreekportfolio]

---

That's it we are done for Day 1 and ready to move forward with designing and coding our website... Please let me know what you think, and if you faced any problems, comment on the box below or tweet to [@hezahran][tweet] and I'll get back to you ASAP...


[cashback]: 				http://www.fatwallet.com/GoDaddy-coupons/
[hecreek]: 					http://hecreek.com/
[fatwallet]: 				http://www.fatwallet.com/
[godaddy]: 					http://www.godaddy.com/
[namecheckr]: 			http://www.namecheckr.com/
[namemesh]: 				http://www.namemesh.com/
[gtranslate]: 			http://translate.google.com/
[gapps]: 						http://www.google.com/enterprise/apps/business/
[gomail]: 					https://www.godaddy.com/email/email-hosting.aspx
[github]: 					http://www.github.com/
[ruby]: 						https://www.ruby-lang.org/en/
[rubyinstall]: 			http://rubyinstaller.org
[gwebfonts]: 				http://www.google.com/webfonts
[skyfonts]: 				https://skyfonts.com/
[Illustrator]: 			http://www.adobe.com/mena_en/products/illustrator.html
[exo2]: 						http://www.google.com/fonts/specimen/Exo+2
[roboto]: 					http://www.google.com/fonts/specimen/Roboto
[flatuicolor]: 			http://www.flatuicolorpicker.com
[tweet]: 						http://twitter.com/hezahran
[hecreekportfolio]: /portfolio/hecreek/