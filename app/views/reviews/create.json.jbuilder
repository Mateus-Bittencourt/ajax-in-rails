if @review.persisted?
  json.my_form render(partial: "reviews/form", formats: :html, locals: {restaurant: @restaurant, review: Review.new})
  json.my_inserted_item render(partial: "restaurants/review", formats: :html, locals: {review: @review})
else
  json.my_form render(partial: "reviews/form", formats: :html, locals: {restaurant: @restaurant, review: @review})
end
