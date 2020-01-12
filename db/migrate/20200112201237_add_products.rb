class AddProducts < ActiveRecord::Migration[6.0]
  
  def change
  	Product.create 	:title => 'Home', :description => 'This is home pizza',	:price => 350, :size => 30,:is_spicy => false, :is_veg => false, :is_best_offer => false, :path_to_image => '/images/home.jpg'

  	Product.create 	:title => 'Peperoni', :description => 'This is amaizing Peperoni pizza', :price => 450,:size => 30,	:is_spicy => false,	:is_veg => false, :is_best_offer => true, :path_to_image => '/images/peper.jpg'

  	Product.create	:title => 'Salami', :description => 'This is nice salami pizza', :price => 400,	:size => 30, :is_spicy => false, :is_veg => false, :is_best_offer => false, :path_to_image => '/images/salam.jpg'

  end
end
