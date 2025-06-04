import { mount } from 'cypress/react'
import React from 'react'

// Agrega `mount` al objeto global `cy`
Cypress.Commands.add('mount', mount)

// Re-exporta React para evitar errores de JSX (como "React is not defined")
export { mount }
