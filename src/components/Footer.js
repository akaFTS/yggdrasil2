import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Footer = () => {
  return (
    <footer className="bg-light-gray flex justify-center items-center ph2 pt3 pb2 f6 mid-gray">
      <span>
        by Gustavo Silva (<span className="fw6">@akafts</span>
        ). Imagens são copyright de Ragnarok Online.
      </span>
      <a
        className="pointer mid-gray hover-dark-gray f3 ml3"
        target="_blank"
        href="https://www.github.com/akafts/yggdrasil2"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </footer>
  )
}

export default Footer
