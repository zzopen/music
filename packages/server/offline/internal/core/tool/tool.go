package tool

func EmptySlice[T any]() []T {
	return make([]T, 0)
}
