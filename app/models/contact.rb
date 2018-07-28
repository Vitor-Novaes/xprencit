class Contact < MailForm::Base

  attribute :name, validate: true
  attribute :email, validate:  /\A([\w\.%\+\-]+)@([\w\-]+\.)+([\w]{2,})\z/i
  attribute :message, validate: true
  attribute :knowledge, validate: true
  attribute :phone, validate: true

  def headers
    {
      subject: "[CONTATO SITE] - Novo email vindo do site",
      to: "teste.acens@gmail.com",
      from: email
    }
  end
end
