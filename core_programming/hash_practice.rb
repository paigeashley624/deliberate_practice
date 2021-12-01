# 1. Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.
# personal_info = {first_name: "Paige", last_name: "Morton", email: "pm@example.com" }

# p personal_info.map {|k,v| puts "#{v}"}

# 2. Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.

# people = [{first_name: "Paige", last_name: "Morton"},
#   {first_name: "Bob", last_name: "The Builder"},
#   {first_name: "Ingrid", last_name: "LeJune"}
# ]

# p people[0].map{|k,v| puts v}
# p people[0][:first_name]
# p people[0][:last_name]

# 3. Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.

# menu = {grits: "$2.21", apple: "$.99", syrup: "$3.17"}
# menu["orange"]="$1.17"
# p menu 

# 4. Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.
# book = {title: "A Song of Ice and Fire", author: "George R.R. Martin", pages: "503", language:"English"}

# book.map {|k,v| puts v}
# 5. Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.
# book = [{title: "A Song of Ice and Fire", author: "George R.R. Martin", pages: "503", language:"English"},{title: "Sniff Snaff", author: "Robert Stew", pages: "503", language:"English"},{title: "Mumbo Jumbo", author: "Akimba Mutumbo", pages: "503", language:"English"}]

# p book[2][:author]

# book = [{"title"=> "A Song of Ice and Fire", "author"=> "George R.R. Martin", "pages"=> "503", "language"=>"English"},{"title"=> "Sniff Snaff", "author"=> "Robert Stew", "pages"=> "503", "language"=>"English"},{"title"=> "Mumbo Jumbo", "author"=> "Akimba Mutumbo", "pages"=> "503", "language"=>"English"}]

# p book[2]["author"]

# 6. Make a hash to store 3 different states and their captitals. Then add a new state and capital and print the hash to see the result.
# states = { Georgia: "Atlanta", New_York: "Albany", Florida: "Tallahasse"}

# states[:Arizona]="Pheonix"
# p states
# 7. Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.
# laptop = { "brand" => "Apple", "model" => "MacBook Air", "year" => 2014 }
# laptop.each{|k,v| p v}

# 8. Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.
# laptops = [
#   { "brand" => "Microsoft", "model" => "Surface" },
#   { "brand" => "Apple", "model" => "MacBook Pro" },
#   { "brand" => "Dell", "model" => "XPS 13" }
# ]
# p laptops[1]["model"]
# 9. Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.



# 10. Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.


# SOLUTIONS: https://gist.github.com/peterxjang/d257aec07882d78009bd796ed53f81bb