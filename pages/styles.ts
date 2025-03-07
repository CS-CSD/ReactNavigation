import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10, // Ensure consistent padding
  },
  image: {
    width: 100,
    height: 100,
  },
  imageContainer: {
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  contain: {
    marginHorizontal: 16,
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 15,
    marginBottom: 20,
    elevation: 10,
        shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#666',
  },
  totalPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 5,
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  // 🔹 Updated Button Styles for Pressable
  button: {
    backgroundColor: '#808080',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
    minWidth: 40, // Ensure button is not too small
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonPressed: {
    backgroundColor: '#000000', // Darker purple when pressed
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // 🔹 Quantity Number
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    minWidth: 30, // Ensures number has space
    textAlign: 'center',
  },

  // 🔹 Updated Remove Button for Pressable
  removeButton: {
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  removeButtonPressed: {
    backgroundColor: '#cc0000', // Darker red on press
  },
  removeText: {
    color: '#fff',
    fontSize: 12,
  },

  // 🔹 Checkout Button for Pressable
  checkoutButton: {
    backgroundColor: '#808080',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  checkoutButtonPressed: {
    backgroundColor: '#000', // Darker green on press
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  // 🔹 Checkout Item Row
  checkoutItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },

  checkoutDetails: {
    flex: 1, // Expands to fill space
  },

  checkoutQuantity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 10,
  },

  checkoutTotalPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6200ea',
  },

  // 🔹 Subtotal Display
  checkoutSubtotalContainer: {
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginTop: 10,
    elevation: 3,
    alignItems: 'center',
  },

  checkoutSubtotalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  // ✅ Checkout Button
  checkoutButton: {
    backgroundColor: '#808080',
    padding: 12,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },

  checkoutButtonPressed: {
    backgroundColor: '#000000',
  },

  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
