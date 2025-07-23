import chatbotPrompt from '../schemas/chatbotPrompt'
import driver from '../schemas/driver'
import driverApplicant from '../schemas/driverApplicant'
import driverRequest from '../schemas/driverRequest'
import feature from '../schemas/feature'
import homepage from '../schemas/homepage'
import post from '../schemas/post'
import siteSettings from '../schemas/siteSettings'
import stats from '../schemas/stats'
import testimonial from '../schemas/testimonial'
import user from '../schemas/user'

export const schemaTypes = [
  post,
  homepage,
  driver,
  testimonial,
  driverApplicant,
  stats,
  siteSettings,
  chatbotPrompt,
  feature,
  user,
  driverRequest,
]
