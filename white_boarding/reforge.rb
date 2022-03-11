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