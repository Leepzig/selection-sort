def selection_sort(arr)
  # type your code in here
  new_arr = []
  length = arr.length
  length.times do 
    min_index = arr.index(arr.min())
    min_el = arr.slice!(min_index)
    new_arr.append(min_el)
  end
  return new_arr
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort([3, -1, 5, 2])

  puts

  # Don't forget to add your own!

  # BENCHMARK HERE, you can print the average runtime
  long_input = []

  100.times { long_input << rand }
end

# Please add your pseudocode to this file
# And a written explanation of your solution
