import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f3f4f6", // Warna latar belakang cerah
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1f2937",
    marginBottom: 30,
  },
  teamContainer: {
    alignItems: "center",
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 3,
  },
  teamName: {
    fontSize: 20,
    fontWeight: "600",
    color: "#1f2937",
    marginBottom: 10,
  },
  teamScore: {
    fontSize: 50,
    fontWeight: "bold",
    color: "#3b82f6",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "60%",
  },
  button: {
    padding: 10,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
  },
  increaseButton: {
    backgroundColor: "#22c55e", // Warna hijau untuk tombol +
  },
  decreaseButton: {
    backgroundColor: "#ef4444", // Warna merah untuk tombol -
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  resetButton: {
    marginTop: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fbbf24", // Warna kuning untuk tombol reset
    borderRadius: 5,
  },
  resetButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#1f2937",
  },
});

export default styles;
