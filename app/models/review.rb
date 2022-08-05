class Review < ApplicationRecord
  belongs_to :restaurant
  idates :content, length: {minimum: 20}
end
