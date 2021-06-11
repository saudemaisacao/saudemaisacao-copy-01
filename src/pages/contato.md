---
title: Contato
hide_title: false
sections:
  - type: form_section
    section_id: contact-form
    content: |
      Entre em contato conosco e responderemos o mais breve possível!
      Complete o formulário para enviar um e-mail para <contato@saudemaisacao.com.br>.

    form_id: contactForm
    form_action: /obrigado
    form_fields:
      - type: form_field
        input_type: text
        name: name
        label: Nome
        default_value: Your name
        is_required: true
      - type: form_field
        input_type: email
        name: email
        label: E-mail
        default_value: Your email address
        is_required: true
      - type: form_field
        input_type: select
        name: subject
        label: Qual o assunto?
        default_value: 'Por favor, selecione'
        options:
          - Cursos
          - Saúde Investimentos
          - Outros
      - type: form_field
        input_type: textarea
        name: message
        label: Mensagem
        default_value: Your message
      - type: form_field
        input_type: checkbox
        name: consent
        label: >-
          Eu aceito que esse formulário colete os dados que forneci para entrar
          em contato comigo.
    submit_label: Enviar mensagem
    title: Alguma dúvida?
seo:
  type: stackbit_page_meta
  title: Contact
  description: This is the contact page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Contact
      keyName: property
    - name: 'og:description'
      value: This is the contact page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Contact
    - name: 'twitter:description'
      value: This is the contact page
template: advanced
---
