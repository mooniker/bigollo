# function(n) = function(n-1) + function(n-2)
# given that f(0) = 1, f(1) = 1

def get_fibonacci_number_recursively(n)
  return 0 if n == 0
  return 1 if n == 1
  return get_fibonacci_number_recursively(n - 1) + get_fibonacci_number_recursively(n - 2)
end

def get_fibonacci_number(n)
  return 0 if n == 0
  return 1 if n == 1

  prev_prev_number = 0;
  prev_number = 1;
  (n - 2).times do
    temp = prev_number + prev_prev_number;
    prev_prev_number = prev_number;
    prev_number = temp;
  end
  return prev_number + prev_prev_number;

end

# output test
10.times do |i|
  puts "#{get_fibonacci_number(i)}, #{get_fibonacci_number_recursively(i)}"
end
