require 'pry'
# ==================Basic Array ===================
# Reduce: Sum 
# Write a function that returns the sum of all numbers in a given array.
# NOTE: Do not use any built-in language functions that do this automatically for you.

# Input: [1, 2, 3, 4]
# Output: 10
# Explanation: (1 + 2 + 3 + 4) = 10

# def sum(input)
#   output = 0 
#   input.each do |n| 
#    output = output + n
#   end
#  p output 
# end 
# sum([1, 2, 3, 4])
# ----
# Select: Less Than 100
# Given an array of numbers, write a function that returns a new array that contains all numbers from the original array that are less than 100.

# Input: [99, 101, 88, 4, 2000, 50]
# Output: [99, 88, 4, 50]

# def less_than100(array)
#   less = []
#   array.each do |n|
#     if n < 100
#       less << n 
#     end 
#   end
#   p less 
# end

# less_than100([99, 101, 88, 4, 2000, 50])
# ---
# Map:Double
# Given an array of numbers, write a function that returns a new array whose values are the original array’s value doubled.

# Input: [4, 2, 5, 99, -4]
# Output: [8, 4, 10, 198, -8]

# def double(array)
#   array.map! {|n| n * 2}
#   p array
# end
# double([4, 2, 5, 99, -4])
# -----
# Array Max:
# Write a function that returns the greatest value from an array of numbers.

# Input: [5, 17, -4, 20, 12]
# Output: 20
# **incomplete**
# def greatest(Array)
#   i = 0 
#   ii = i + 1
#   output = []
#   while i < array.length
#     if array[i] > array[ii]
#       output << array[i]
#     else 
#       i += 1 
#     end

#   end 
#   p output
# end
# greatest([5, 17, -4, 20, 12])
# ---

# Reduce: Product:
# Write a function that accepts an array of numbers and returns the product of all the numbers.

# Input: [1, 2, 3, 4]
# Output: 24

# Explanation: (1 x 2 x 3 x 4) = 24

# def product(param)
#   results = 1
#   param.each do |e| 
#     results = e * results 
#   end 
#   return results 
# end
# p product([1, 2, 3, 4])

# -----------------------
# Given an array, write a function that returns an array that contains the original array’s values in reverse.

# Input: [1, 2, 3, 4, 5]
# Output: [5, 4, 3, 2, 1]

# def reverse(array)
#   output = []
#   array.reverse.each do |e|
#    output << e 
#   end
#   return output
# end 
# p reverse([1, 2, 3, 4, 5])

# learned to do the .pop method which removes the last item from something. 

# def reverse(array)
#   output = []
#   count = 0 
#   while count < array.length 
#    output << array.pop
#   end
#   return output
# end 
# p reverse([1, 2, 3, 4, 5])

# -------------------

# Given an array of numbers, write a function that returns a new array in which only select numbers from the original array are included, based on the following details:

# The new array should always start with the first number from the original array. The next number that should be included depends on what the first number is. The first number dictates how many spaces to the right the computer should move to pick the next number. For example, if the first number is 2, then the next number that the computer should select would be two spaces to the right. This number gets added to the new array. If this next number happens to be a 4, then the next number after that is the one four spaces to the right. And so on and so forth until the end of the array is reached.

# Input:
# [2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2] 19
# 20 
# Output:
# [2, 3, 1, 2, 2, 1, 5, 2, 2]

# def skip_it(array)
#   stop = array.length - 1 
#   i = 0
#   new_array = []
#   while i <= stop 
#     new_array << array[i]
#     i = array[i] + i
#   end 
#   return new_array
# end
# p skip_it([2, 1, 3, 2, 5, 1, 2, 6, 2, 7, 1, 5, 6, 3, 2, 6, 2, 1, 2])


###########Basic String######## 

# Given a string, write a function that returns true if the “$” character is contained within the string or false if it is not.

# Input: “i hate $ but i love money i know i know im crazy”
# Output: true

# Input: “abcdefghijklmnopqrstuvwxyz”
# Output: false

# def show_me_the_money(input)
#   i = 0 
#   loop = input.length
#   while i < loop
#     if input[i] == "$"
#       p "true"
#       break
#     else
#       i += 1
#     end 
#     p false
#   end 
# end 

# if i == input.length - 1 && i != $

# p show_me_the_money("i hate $ but i love money i know i know im crazy")
# p show_me_the_money("abcdefghijklmnopqrstuvwxyz")

# ---------------------
# Alternate Capitals
# Given a string, write a function that returns a copy of the original string that has every other character capitalized. (Capitalization should begin with the second character.)

  # Input: “hello, how are your porcupines today?”
  # Output: “hElLo, HoW ArE YoUr pOrCuPiNeS ToDaY?”

  # def alternate_capitals(param)
  # string = ""
  # letters = param.split('')
  # # p letters
  #   letters.each_with_index {|l,i|
  #   if i % 2 != 0
  #     string << l.upcase
  #   else 
  #     string << l 
  #   end  }
  #   p string
  # end
  # alternate_capitals("hello, how are your porcupines today?")

####################
# Write a function that returns whether a given number is a prime number.

# 5 
# prime 

# 2 
# not prime 

# number / 2 
# if the number isnt divisable by 2 then its prime 
# if it is then its not prime  

# def prime(number)
#  if number % 2 == 0 
#    p "This number is not a prime number"
#  else
#   p "This number is a prime number"
#  end
# end 
# prime(3)



# Given an array, write a function that returns an array that contains the original array’s values in reverse.

# Input: [1, 2, 3, 4, 5]
#                  i
# Output: [5, 4, 3, 2, 1]

# index = array.length - 1 

# def reverse(input)
# output = []
# i = input.length - 1 # 4 
#   while i >= 0  # 4 > 0 
#     output << input[i] # [5]
#     i -= 1 # 3 
#   end 
#   p output
# end 

# reverse([1, 2, 3, 4, 5])



# Array Mesh 1 : Given two arrays of strings, return a new string that contains every combination of a string from the first array concatenated with a string from the second array.

# Input: ["a", "b", "c"], ["d", "e", "f", "g"]
# Output: ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"]

# array1 = ["a", "b", "c"]
# array2 = ["d", "e", "f", "g"]
# new_array = []
# index = 0 

# while index < array1.length # index = 0 array length = 3 
#   array2.each do |l| # d 
#   new_array << "#{array1[index] + l}" # a + d 
#   end 
#   index += 1 
# end 
# p new_array

# The Collatz Conjecture or 3x+1 problem can be summarized as follows:

# Take any positive integer n. If n is even, divide n by 2 to get n / 2. If n is odd, multiply n by 3 and add 1 to get 3n + 1. Repeat the process indefinitely. The conjecture states that no matter which number you start with, you will always reach 1 eventually.

# Given a number n, return the number of steps required to reach 1.

# Examples
# Starting with n = 12, the steps would be as follows:

# 12
# 6
# 3
# 10
# 5
# 16
# 8
# 4
# 2
# 1

# Resulting in 9 steps. So for input n = 12, the return value would be 9.

# n=12 
# sum = 0 
# steps = 0 
# while sum != 1 
#   if 12 % 2 == 0 
#     sum = 12 % 2 
#     step += 1 
#   else 12 % 2 != 0 
#     sum = (12 * 3) + 1 
#     step += 1 
#   end 
# end 

# def conjecture(n)
#   steps = 0 # 3 
#   while n != 1 # 6 > 1 
#     if n % 2 == 0 # true 
#       n = n / 2 # 3 
#       steps += 1  # 2 
#     elsif n % 2 != 0 # true 
#       n = (n * 3) + 1 # 10 
#       steps += 1 
#     end 
#   end 
#   p steps 
# end
# conjecture(12)

# FizzBuzz: 
# Write a function that prints out every number from 1 to N, with the following exceptions:

# If the number is divisible by 3, print out "FIZZ".
# If the number is divisible by 5, print out "BUZZ".
# If the number is divisible by both 3 and 5, print out "FIZZBUZZ".


# [3,5,15]
# INCOMPLETE ! 
# def divisible(input_num)
#   nums = [*1..input_num]
#   p nums 
#   nums.each do |e|
#     if e % 3 == 0 && 3 % 5 == 0
#      p "FizzBuzz"
#     elsif e % 3 == 0 
#      p "FIZZ"
#     elsif e % 5 == 0 
#      p "Buzz" 
#     else 
#      p e 
#     end 
#   end 
# end

# divisible(15)

# for each item in the array then as if divisable by __ ___ __
#   if 3 % 3 == 0 && 3 % 5 == 0
#     p FizzBuzz
#   elseif 3 % 3 == 0 
#    p FIZZ
#   elseif 3 % 5 == 0 
#   p Buzz 
#   else 
#     p "not divisable by either"
#   end 


# Find the unique letters. Create a function that takes a string and returns the letters that occur only once. 

# def find_letters(word)
#   compare = []
#   words = word.split("")
#   i = 0 
  
#   # while i < words.length # while 0 < 8 
#     words.map do |l|
#       # print l
#       if l == compare[i]
#         i += 1 
#         # break
#       elsif
#        compare << l
#       #  break
#       end
#       i += 1 
#     end

    # while j <= i #while 0 <= 0 
    #   if compare[j] == words[i]
    #     i += 1 
    #     # break
    #   elsif
    #    compare << words[i]
    #   #  break
    #   end 
    #   j += 1 
    # end
    # i += 1 
  # end 
#   p compare
# end 

# find_letters("monopoly")
# find_letters("balloon")
# find_letters("analysis")

# def prevent_distractions(str)
#   noWords = ["anime", "meme", "vines", "roasts","Danny Devito"]
#   i = 0 

#   while noWords.length
#     if str.include? noWords[i]
#       p "No!"
#       break
#     else
#       i += 1
#       if i > noWords.length
#         p "Safe watching!"
#       end
#     end
#   end 


# end
# # prevent_distractions("vines that butter my eggroll")
# prevent_distractions("Hot pictures of Danny DeVito")
# prevent_distractions("How to ace BC Calculus in 5 Easy Steps")

# -------------------------------RNA transcription---------------------
# Given a DNA strand, return its RNA complement (per RNA transcription).

# Both DNA and RNA strands are a sequence of nucleotides. Here we're representing the sequences with single-letter characters (e.g. a sample strand may look like: "AGCA".)

# Given a string representing a DNA strand, provide its transcribed RNA strand, according to the following pattern:

# G becomes C
# C becomes G
# T becomes A
# A becomes U

# So based on all this, here's a sample input/output:

# Input: 'ACGTGGTCTTAA'
# Output: 'UGCACCAGAAUU'
# --

# the hash will consist of key value parings for letters to know what letter equals which. 
#when the DNA is entered Each letter needs to be mapped and run against the keys and values
# if the letter matches a letter in the key the value needs to be retuned in a string. This will be done for all letters and once complete the new string will be returned 

# def rna_transcription(rna)
#   transcription_key = {G:'C', C:'G', T:'A', A:'U'}
#   translation = String.new 

#   rna.chars.map do |letter| 
#       translation << transcription_key[letter.to_sym]
#   end 
#    p translation
# end 
# rna_transcription('ACGTGGTCTTAA')

# ===========================Popular Post==================================
# Given an array of hashes that represent a list of social media posts, return a new array that only contains the posts that have at least 1000 likes.

# Input: [
# {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
# {title: 'i never knew how cool i was until now', submitted_by: "Lyndon Johnson", likes: 3},
# {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
# {title: 'Mondays are the worst', submitted_by: "Aunty Em", likes: 644}
# ]

# Output: [
# {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
# {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
# ]

# ---
# we will map through the post and if the title keys value is greater than or equal to 1000 then that post will display 

# social_post = [{title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
#   {title: 'i never knew how cool i was until now', submitted_by: "Lyndon Johnson", likes: 3},
#   {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
#   {title: 'Mondays are the worst', submitted_by: "Aunty Em", likes: 644}]

# def popular_post(post)
#   i = 0 
#   most_likes = []
#   while i < post.length
#     if post[i][:likes] >= 1000
#       most_likes << post[i]
#     end
#     i +=1 
#   end
#  return most_likes
# end

# p popular_post([
#   {title: 'Me Eating Pizza', submitted_by: "Joelle P.", likes: 1549},
#   {title: 'i never knew how cool i was until now', submitted_by: "Lyndon Johnson", likes: 3},
#   {title: 'best selfie evar!!!', submitted_by: "Patti Q.", likes: 1092},
#   {title: 'Mondays are the worst', submitted_by: "Aunty Em", likes: 644}
#   ])

# ===========================Merge Sorted Arrays===============================
# Given two sorted arrays, merge the second array into the first array while ensuring that the first array remains sorted. Do not use any built-in sort methods.

# Input :
# A : [1, 5, 8]
# B : [6, 9]

# Modified A : [1, 5, 6, 8, 9]

# def array_sort(input1, input2)
  # want to use .insert - Inserts the given values before the element with the given index (which may be negative).
  #.insert(index-to-insert-at,value-to-insert)
  # modified = input1
  # index = 0 

  # input2.map do |i| #[6,9]
  #   while index <= input1.length # 0 < 3 
  #     if i > modified[index] # 6 < 1 , 6 < 5, 6<8
  #       index += 1
  #     else 
  #       modified.insert(index-=1,i)  #modifed = [1,5,6,8]
  #     end
  #     # binding.pry
  #   end

  # end

  # p modified

# end

# array_sort([1, 5, 8],[6, 9])

# binding.pry
# require 'set' 


# Write a function that determines if an array of n values is valid, where valid means, every digit in the row is unique. And let’s assume that the input array can have blank placeholders represented as ‘.’. See examples be


# if the value (excluding the '.') at the current index exist at any other position within the array it is not a valid set. 

# ['5', '.', '.', '3', '.', '7']

# true = valid 
# false = not valid 

require 'set'
require 'pry'

# def valid?(array)
#   array.delete('.')
#   values = Set.new

#   array.each do |value|
#     if values.include?(value)
#     return false
#     else 
#     values << value
#     end
#   end 
#   return true

# end


# def valid?(array)
#   array.delete('.')
  
#   values = Set.new

#   array.map do |value| 
#     values.include?(value) ? (return false) : values << value
#   end 
#   return true
# end


# def valid?(array)
#   array.delete('.')
  
#   values = []
  
#   array.each do |value|
#     return false if values.include?(value)
    
#     values << value
#   end
  
#   true
# end

def valid?(row)
  return false unless row.is_a?(Array)
  row.delete('.')
  row_item_counts = row.each_with_object({}) do |item, acc|
    acc[item] ? acc[item] += 1 : acc[item] = 1
  end
  row_item_counts.reject { |_, value| value <= 1 } == {}
end

def valid?(row)
  return false unless row.is_a?(Array)
  row.delete('.')
  row.count == row.uniq.count
end

p valid?(['.']) #--> true
p valid?(['5', '.', '.', '3', '.', '7']) #--> true
p valid?(['5', '.', '.', '3', '.', '7', '.', '5'])#--> false
p valid?('5')#--> false