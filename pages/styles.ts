import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    image: {
      width: 100,
      height: 100
    },
    imageContainer: {
      justifyContent: 'space-around',
      alignItems: 'center',
      flex: 1
    },
    contain: {
        marginHorizontal: 16,
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.8)", 
        borderRadius: 15,
        marginBottom: 20,
      },
      container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f5f5f5',
      },
      itemContainer: {
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
      button: {
        backgroundColor: '#6200ea',
        padding: 8,
        borderRadius: 5,
        marginHorizontal: 5,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
      quantity: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      removeButton: {
        backgroundColor: '#ff4d4d',
        padding: 8,
        borderRadius: 5,
        marginLeft: 10,
      },
      removeText: {
        color: '#fff',
        fontSize: 12,
      },
      checkoutButton: {
        backgroundColor: '#28a745',
        padding: 12,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 10,
      },
      checkoutText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
  });