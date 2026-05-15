package core

type ElonmuskapiError struct {
	IsElonmuskapiError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewElonmuskapiError(code string, msg string, ctx *Context) *ElonmuskapiError {
	return &ElonmuskapiError{
		IsElonmuskapiError: true,
		Sdk:              "Elonmuskapi",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *ElonmuskapiError) Error() string {
	return e.Msg
}
